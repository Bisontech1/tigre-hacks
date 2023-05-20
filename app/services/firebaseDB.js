import {
  child,
  getDatabase,
  push,
  ref,
  set,
  onValue,
  query,
  orderByChild,
  equalTo,
  off,
  update,
  get,
} from "firebase/database";

class FirebaseDatabase {
  table;

  constructor(app, tableName) {
    const database = getDatabase(app);
    this.table = ref(database, tableName);
  }

  async add(data) {
    const newElement = await push(this.table);
    data.id = newElement.key;
    await set(child(this.table, data.id), data);
  }
}

export class UserDatabase extends FirebaseDatabase {
  constructor(app) {
    super(app, "users");
  }

  async add(data) {
    data.password = null;
    await set(child(this.table, data.id), data);
  }

  async update(data) {
    data.password = null;
    await set(child(this.table, data.id), data);
    return data;
  }

  async getUserById(id) {
    const result = await get(child(this.table, id));
    return result.val();
  }

  async getUserData(email) {
    return new Promise((resolve, reject) => {
      const emailQuery = query(
        this.table,
        orderByChild("email"),
        equalTo(email)
      );
      let eventHandler;
      eventHandler = onValue(
        emailQuery,
        (snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            const userKey = Object.keys(userData)[0];
            localStorage.setItem("userData", JSON.stringify(userData[userKey]));
            resolve(userData[userKey]);
          } else {
            reject(new Error("User not found"));
          }
          off(emailQuery, "value", eventHandler); // Remove the event handler
        },
        (errorObject) => {
          console.log("The read failed: " + errorObject.name);
          off(emailQuery, "value", eventHandler); // Remove the event handler
          reject(errorObject);
        }
      );
    });
  }

  async addTeamToUsers(teamName, userEmails) {
    const promises = userEmails.map((email) => {
      return new Promise((resolve) => {
        const emailQuery = query(
          this.table,
          orderByChild("email"),
          equalTo(email)
        );
        let eventHandler;
        eventHandler = onValue(
          emailQuery,
          (snapshot) => {
            if (snapshot.exists()) {
              const userKey = Object.keys(snapshot.val())[0];
              const userRef = child(this.table, userKey);
              update(userRef, { team: teamName }).then(() => resolve());
            } else {
              resolve();
            }
            off(emailQuery, "value", eventHandler); // Remove the event handler
          },
          (errorObject) => {
            console.log("The read failed: " + errorObject.name);
            off(emailQuery, "value", eventHandler); // Remove the event handler
            resolve();
          }
        );
      });
    });

    await Promise.all(promises);
  }

  async findUserByEmail(email) {
    const emailQuery = query(this.table, orderByChild("email"), equalTo(email));
    var result = await get(emailQuery);
    return Object.values(result.val()).pop();
  }

  async findEmails(teamData) {
    const foundEmails = [];
    const notFoundEmails = [];

    // Helper function to handle each email search
    const findEmail = (email) => {
      return new Promise((resolve) => {
        const emailQuery = query(
          this.table,
          orderByChild("email"),
          equalTo(email)
        );
        let eventHandler;
        eventHandler = onValue(
          emailQuery,
          (snapshot) => {
            if (snapshot.exists()) {
              foundEmails.push(email);
            } else {
              notFoundEmails.push(email);
            }
            off(emailQuery, "value", eventHandler); // Remove the event handler
            resolve();
          },
          (errorObject) => {
            console.log("The read failed: " + errorObject.name);
            notFoundEmails.push(email);
            off(emailQuery, "value", eventHandler); // Remove the event handler
            resolve();
          }
        );
      });
    };

    // Extract emails from the teamData object
    const emails = Object.values(teamData);

    // Execute findEmail for each email in the teamData object
    await Promise.all(emails.map((email) => findEmail(email)));

    // Return found and not found emails
    return {
      foundEmails,
      notFoundEmails,
    };
  }
}

export class TeamsDatabase extends FirebaseDatabase {
  constructor(app) {
    super(app, "teams");
  }

  async add(data) {
    const newElement = await push(this.table);
    await set(child(this.table, data), { team_name: data });
  }

  async update(data) {
    await set(child(this.table, data.team_name), data);
    return data;
  }

  async read() {
    return new Promise((resolve, reject) => {
      onValue(
        this.table,
        (snapshot) => {
          resolve(snapshot.val());
        },
        (errorObject) => {
          reject(errorObject);
        }
      );
    });
  }

  async addUsersToTeam(teamName, userEmails) {
    const teamRef = child(this.table, teamName);
    const teamQuery = query(
      teamRef,
      orderByChild("team_name"),
      equalTo(teamName)
    );

    let eventHandler;
    eventHandler = onValue(
      teamQuery,
      async (snapshot) => {
        let teamData;

        if (snapshot.exists()) {
          teamData = snapshot.val()[teamName];
          teamData.members = [...(teamData.members || []), ...userEmails];
        } else {
          teamData = {
            team_name: teamName,
            members: userEmails,
          };
        }

        await set(teamRef, teamData);
        off(teamQuery, "value", eventHandler); // Remove the event handler
      },
      (errorObject) => {
        console.log("The read failed: " + errorObject.name);
        off(teamQuery, "value", eventHandler); // Remove the event handler
      }
    );
  }

  async findTeamByName(teamName) {
    return new Promise((resolve) => {
      const teamQuery = query(
        this.table,
        orderByChild("team_name"),
        equalTo(teamName)
      );
      let eventHandler;
      eventHandler = onValue(
        teamQuery,
        (snapshot) => {
          if (snapshot.exists()) {
            const teamData = snapshot.val();
            resolve(teamData);
          } else {
            resolve(null);
          }
          off(teamQuery, "value", eventHandler); // Remove the event handler
        },
        (errorObject) => {
          console.log("The read failed: " + errorObject.name);
          resolve(null);
          off(teamQuery, "value", eventHandler); // Remove the event handler
        }
      );
    });
  }

  async getUserTeam(teamName) {
    return new Promise((resolve, reject) => {
      if (!teamName) {
        resolve(null);
        return;
      }

      const teamQuery = query(
        this.table,
        orderByChild("team_name"),
        equalTo(teamName)
      );
      let eventHandler;
      eventHandler = onValue(
        teamQuery,
        (snapshot) => {
          if (snapshot.exists()) {
            const teamData = snapshot.val();
            const teamKey = Object.keys(teamData)[0];
            localStorage.setItem("team", JSON.stringify(teamData[userKey]));
            resolve(teamData[teamKey]);
          } else {
            reject(new Error("Team not found"));
          }
          off(teamQuery, "value", eventHandler); // Remove the event handler
        },
        (errorObject) => {
          console.log("The read failed: " + errorObject.name);
          off(teamQuery, "value", eventHandler); // Remove the event handler
          reject(errorObject);
        }
      );
    });
  }
}
