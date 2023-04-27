import React from "react";
import { translationService } from "utils/translations";

const TranslationContext = React.createContext();

export const TranslationContextProvider = (props) => {
  const [language, setLanguage] = React.useState(translationService.language);

  const changeLanguage = async (language) => {
    await translationService.changeLanguage(language);
    setLanguage(translationService.language);
  };

  const loadLanguage = async () => {
    await translationService.loadLanguage();
    changeLanguage(translationService.language);
  };

  React.useEffect(() => {
    loadLanguage();
  });

  return (
    <TranslationContext.Provider
      value={{
        language: language,
        setLanguage: changeLanguage,
        loadLanguage: loadLanguage,
      }}
    >
      {props.children}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = () => React.useContext(TranslationContext);
