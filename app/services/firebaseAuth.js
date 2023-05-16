import {
  createUserWithEmailAndPassword,
  deleteUser,
  getAuth,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
  updateProfile,
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

  async updateEmail(email) {
    if (!this.auth.currentUser) return;
    await updateEmail(this.auth.currentUser, email);
    return this.auth.currentUser;
  }

  async updatePassword(password) {
    if (!this.auth.currentUser) return;
    await updatePassword(this.auth.currentUser, password);
    return this.auth.currentUser;
  }

  async deleteUser(user) {
    return deleteUser(user);
  }

  async signIn(email, password) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
}
