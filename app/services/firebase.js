import { initializeApp } from "firebase/app";
import { UserDatabase, TeamsDatabase } from "./firebaseDB";
import { FirebaseAuth } from "./firebaseAuth";
import { CVStorage } from "./firebaseStorage";

const firebaseApp = initializeApp(process.env.firebase);

export const authService = new FirebaseAuth(firebaseApp);
export const usersDatabase = new UserDatabase(firebaseApp);
export const cvStorage = new CVStorage(firebaseApp);
export const teamsDatabase = new TeamsDatabase(firebaseApp) 