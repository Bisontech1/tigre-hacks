import { deleteObject, getStorage, ref, uploadBytes } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";

export class FirebaseFileStorage {
  storage;
  ref;
  constructor(app, location) {
    this.storage = getStorage(app);
    this.ref = ref(this.storage, location);
  }

  async addFile(file, filename) {
    return uploadBytes(
      ref(this.storage, this.ref.fullPath + "/" + filename),
      file
    );
  }

  async deleteFile(file) {
    const fileRef = ref(this.storage, file.ref.fullPath);
    const exists = await this.fileExists(fileRef);
    if (!exists) return;
    return deleteObject(fileRef);
  }

  async deleteFileWithUrl(url) {
    const fileRef = ref(this.storage, url);
    const exists = await this.fileExists(fileRef);
    if (!exists) return;
    return deleteObject(fileRef);
  }

  fileExists(storageRef) {
    return new Promise((res, rej) => {
      getDownloadURL(storageRef)
        .then((url) => {
          return res(true);
        })
        .catch((error) => {
          if (error.code === "storage/object-not-found") {
            return res(false);
          } else {
            return rej(error);
          }
        });
    });
  }

  async getDownloadURL(file) {
    return getDownloadURL(file.ref);
  }
}

export class CVStorage extends FirebaseFileStorage {
  constructor(app) {
    super(app, "cvs");
  }
}
