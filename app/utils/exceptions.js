export class MissingKey extends Error {
  constructor(key) {
    super(`Key ${'"' + key + '"'} not found in translation file`);
  }
}
