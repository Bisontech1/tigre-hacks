import { child, getDatabase, push, ref, set, onValue, query, orderByChild, equalTo, off } from "firebase/database";

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
    await set(child(this.table, data.id), data)
  }

  async addTeamToUsers(teamName, userEmails) {
    const promises = userEmails.map(async (email) => {
      const emailQuery = query(this.table, orderByChild("email"), equalTo(email));
      const emailSnapshot = await once(emailQuery);

      if (emailSnapshot.exists()) {
        const userKey = Object.keys(emailSnapshot.val())[0];
        const userRef = child(this.table, userKey);
        await update(userRef, { team: teamName });
      }
    });

    await Promise.all(promises);
  }


  async findEmails(teamData) {
    const foundEmails = [];
    const notFoundEmails = [];

    // Helper function to handle each email search
    const findEmail = (email) => {
      return new Promise((resolve) => {
        const emailQuery = query(this.table, orderByChild("email"), equalTo(email));
        const eventHandler = onValue(emailQuery, (snapshot) => {
          if (snapshot.exists()) {
            foundEmails.push(email);
          } else {
            notFoundEmails.push(email);
          }
          off(emailQuery, "value", eventHandler); // Remove the event handler
          resolve();
        }, (errorObject) => {
          console.log('The read failed: ' + errorObject.name);
          notFoundEmails.push(email);
          off(emailQuery, "value", eventHandler); // Remove the event handler
          resolve();
        });
      });
    };

    // Extract emails from the teamData object
    const emails = Object.values(teamData);

    // Execute findEmail for each email in the teamData object
    await Promise.all(emails.map(email => findEmail(email)));

    // Return found and not found emails
    return {
      foundEmails,
      notFoundEmails
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

  async read() {
    onValue(this.table, (snapshot) => {
      console.log(snapshot.val())
      return snapshot.val()
    }, (errorObject) => {
      console.log('The read failed: ' + errorObject.name);
    });
  }

  async findTeamByName(teamName) {
    return new Promise((resolve) => {
      const teamQuery = query(this.table, orderByChild("team_name"), equalTo(teamName));
      const eventHandler = onValue(teamQuery, (snapshot) => {
        if (snapshot.exists()) {
          const teamData = snapshot.val();
          resolve(teamData);
        } else {
          resolve(null);
        }
        off(teamQuery, "value", eventHandler); // Remove the event handler
      }, (errorObject) => {
        console.log('The read failed: ' + errorObject.name);
        resolve(null);
        off(teamQuery, "value", eventHandler); // Remove the event handler
      });
    });
  }





}


