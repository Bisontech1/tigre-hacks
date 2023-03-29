import React from "react";
import { TranslationContext } from "../../../page";
import "./index.css";
const Hero = () => {
  const language = React.useContext(TranslationContext);

  return (
    <>
      <section className="hero">
        <div className="column-left">
          <img src="tiger.png" alt="Bigger image of the logo" loading="eager" />
        </div>
        <div className="column-right">
          <img src="bxu.png" alt="Bisontech logo" />
          <h1>{language.getString("hero.title")}</h1>
          <p className="extra-light">{language.getString("hero.subtitle")}</p>
          <h6 className="bold">
            {language.getString("hero.date")} |{" "}
            {language.getString("hero.place")}
          </h6>
          <div className="button-row">
            <a className="white-background">
              {language.getString("hero.register")}
            </a>
            <a className="orange-background">
              {language.getString("hero.sponsorUs")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
