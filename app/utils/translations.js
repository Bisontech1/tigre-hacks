import { Language } from "./language";

class TranslationService {
  LANGUAGE_KEY = "selectedLanguage";

  language;

  async loadLanguage() {
    const languageJson = localStorage.getItem(this.LANGUAGE_KEY);

    let language = Language.ES;

    if (languageJson != null)
      language = Object.assign(new Language(), JSON.parse(languageJson));

    await this.changeLanguage(language);
  }

  async readLanguageFile(language) {
    const response = await fetch(`/languages/${language.filename}`);
    const json = await response.json();
    console.log(json);
    language.load(json);
    return language;
  }

  saveLanguagePreferences(language) {
    const jsonLanguage = JSON.stringify(new Language(language.id));
    localStorage.setItem(this.LANGUAGE_KEY, jsonLanguage);
  }

  async changeLanguage(language) {
    this.saveLanguagePreferences(language);
    await this.readLanguageFile(language);
    this.language = language;
    return language;
  }
}

export const translationService = new TranslationService();
