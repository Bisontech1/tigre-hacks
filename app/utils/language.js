import { MissingKey } from "./exceptions";

export class Language {
  static array = [];
  static ES = new Language("es", "Español");
  static EN = new Language("en", "English");

  filename = "";
  name;
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

  constructor(id = null, name = null) {
    this.filename = id + ".json";
    this.id = id;
    this.name = name;

    if (!Language.array.find((e) => e.id == id) && id != null)
      Language.array.push(this);
  }
}
