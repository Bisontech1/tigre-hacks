import { MissingKey } from "./exceptions";

export class Language {
  static array = [];
  static ES = new Language("es");
  static EN = new Language("en");

  filename = "";
  id;
  content;

  getString(key1, ...args) {
    let value;

    const keys = key1.split(".");
    let json = this.content;

    while (keys.length > 0) {
      const key = keys.shift();
      json = json[key];
      if (json == null) throw new MissingKey(key1);
    }

    value = json;

    let t = 0;
    value = value.replace(/%/g, (match) => args[t++] ?? match);

    return value;
  }

  load(strings) {
    this.content = strings;
  }

  constructor(id = "") {
    this.filename = id + ".json";
    this.id = id;
    Language.array.push(this);
  }
}
