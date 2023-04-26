import { child, getDatabase, push, ref, set } from "firebase/database";

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
    await set(child(this.table,data.id),data)
  }
}
