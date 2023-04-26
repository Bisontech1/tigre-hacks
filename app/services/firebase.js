import { initializeApp } from "firebase/app";
import { UserDatabase } from "./firebaseDB";
import { FirebaseAuth } from "./firebaseAuth";
import { CVStorage } from "./firebaseStorage";

const firebaseApp = initializeApp(process.env.firebase);

export const authService = new FirebaseAuth(firebaseApp);
export const usersDatabase = new UserDatabase(firebaseApp);
export const cvStorage = new CVStorage(firebaseApp);
