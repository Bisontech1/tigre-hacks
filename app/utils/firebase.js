import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, set, ref } from "firebase/database"
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.APP_ID,
  // measurementId: process.env.MEASUREMENT_ID,
  // databaseURL: process.env.DATABASE_URL

  apiKey: "AIzaSyDwBvRGPZnkmsztCdVas_OMn_0Cms1AKVI",
  authDomain: "tigrehacks.firebaseapp.com",
  projectId: "tigrehacks",
  storageBucket: "tigrehacks.appspot.com",
  messagingSenderId: "706619671179",
  appId: "1:706619671179:web:c1ae74dabbcff1873dca8e",
  measurementId: "G-66J83MZF18"
};

console.log(firebaseConfig)

// Initialize Firebase
const app = firebaseConfig ? initializeApp(firebaseConfig) : null;
const database = getDatabase(app);
const storage = getStorage(app);

// Función para subir el archivo de resume y obtener la URL de descarga
function subirArchivoDeResume(nombreArchivo, archivo) {
  const archivoRef = storageRef.child(`resumes/${nombreArchivo}`);
  
  return archivoRef.put(archivo)
    .then(snapshot => {
      return snapshot.ref.getDownloadURL();
    })
    .catch(error => {
      console.error("Error al subir archivo de resume", error);
      throw error;
    });
}

// Función para agregar un participante a la base de datos
// export function agregarParticipante(participante) {
//   // Genera un nuevo ID único para el participante
//   const nuevoId = databaseRef.child('participantes').push().key;
  
  // Sube el archivo de resume y obtiene la URL de descarga
  // return subirArchivoDeResume(`${nuevoId}.pdf`, participante.resume)
  //   .then(urlDeDescarga => {
  //     const participanteData = {
  //       nombre: participante.nombre,
  //       apellidos: participante.apellidos,
  //       email: participante.email,
  //       telefono: participante.telefono,
  //       pronombres: participante.pronombres,
  //       genero: participante.genero,
  //       edad: participante.edad,
  //       escuela: participante.escuela,
  //       resumeUrl: urlDeDescarga,
  //       restriccionesDietarias: participante.restriccionesDietarias,
  //       tallaCamisa: participante.tallaCamisa,
  //       generoSubrepresentado: participante.generoSubrepresentado,
  //       raza: participante.raza,
  //       gradoDeEstudios: participante.gradoDeEstudios,
  //       LGBT: participante.LGBT,
  //       MLHEmail: participante.MLHEmail
  //     };
      
  //     const updates = {};
  //     updates[`/participantes/${nuevoId}`] = participanteData;
      
  //     return databaseRef.update(updates);
  //   })
  //   .catch(error => {
  //     console.error("Error al agregar participante", error);
  //     throw error;
  //   });

  export function agregarParticipante(participante) {
    
    // Crea un objeto con la información del participante
    return set(ref(database, 'participantes/' + generateId(participante)), {
      nombre: participante.nombre,
      apellidos: participante.apellidos,
      email: participante.email,
      telefono: participante.telefono,
      pronombres: participante.pronombres,
      genero: participante.genero,
      edad: participante.edad,
      escuela: participante.escuela,
      // resume: participante.resume,
      restriccionesDietarias: participante.restriccionesDietarias,
      tallaCamisa: participante.tallaCamisa,
      generoSubrepresentado: participante.generoSubrepresentado,
      raza: participante.raza,
      gradoDeEstudios: participante.gradoDeEstudios,
      LGBT: participante.lgbt,
      mlhemail: participante.mlhemail
    });


}


function generateId(participante){
  return participante.nombre[0] + participante.apellidos[0] + participante.email[0] + participante.telefono[0].toString() + participante.pronombres[0] + participante.edad.toString() + participante.escuela[0]
}