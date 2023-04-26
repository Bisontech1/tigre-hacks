import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";

export class FirebaseAuth {
  auth;
  constructor(app) {
    this.auth = getAuth(app);
  }

  async register(email, password) {
    const credential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    return credential.user;
  }

  async deleteUser(user) {
    return deleteUser(user);
  }

  async signIn(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}
