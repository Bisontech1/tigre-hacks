import { deleteObject, getStorage, ref, uploadBytes } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";

export class FirebaseFileStorage {
  storage;
  ref;
  constructor(app, location) {
    this.storage = getStorage(app);
    this.ref = ref(this.storage, location);
  }

  async addFile(file) {
    return uploadBytes(
      ref(this.storage, this.ref.fullPath + "/" + file.name),
      file
    );
  }

  async deleteFile(file) {
    return deleteObject(ref(this.storage, file.ref.fullPath));
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
