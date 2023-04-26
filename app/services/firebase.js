import { initializeApp } from "firebase/app";
import { UserDatabase } from "./firebaseDB";
import { FirebaseAuth } from "./firebaseAuth";

const firebaseApp = initializeApp(process.env.firebase);

export const authService = new FirebaseAuth(firebaseApp);
export const usersDatabase = new UserDatabase(firebaseApp);
