import React from "react";
import { TranslationContext } from "../../../page";
import "./index.css";
import { useTranslationContext } from "../../../layout";
const Everybody = () => {
  const { language, setLanguage } = useTranslationContext();

  return (
    <section className="everybody">
      <div className="row" style={{ alignItems: "center" }}>
        <h3 style={{ margin: "0px 50px 0px 0px" }}>
          {language?.getString("everyoneCanParticipate.title")}
        </h3>
        <img
          src="cute cat.png"
          style={{ width: 100 }}
          alt="a cute cat with his tongue out"
          loading="lazy"
        />
      </div>
      <div className="row" style={{ maxWidth: "1000px" }}>
        <div className="item">
          {language?.getString("everyoneCanParticipate.medics")}
        </div>
        <div className="item">
          {language?.getString("everyoneCanParticipate.biologists")}
        </div>
        <div className="item">
          {language?.getString("everyoneCanParticipate.engineers")}
        </div>
        <div className="item">
          {language?.getString("everyoneCanParticipate.acountants")}
        </div>
        <div className="item">
          {language?.getString("everyoneCanParticipate.scientists")}
        </div>
        <div className="item">
          {language?.getString("everyoneCanParticipate.entrepeneurs")}
        </div>
        <div className="item">
          {language?.getString("everyoneCanParticipate.architects")}
        </div>
        <div className="item">
          {language?.getString("everyoneCanParticipate.recentGraduates")}
        </div>
      </div>
      <div className="row" id="first-time-cat" style={{ maxWidth: 1200 }}>
        <div className="left-column">
          <img src="greetings.png" alt="Your Image" loading="lazy" />
        </div>
        <div className="right-column" id="first-time">
          <p>{language?.getString("everyoneCanParticipate.firstTime")}</p>
        </div>
      </div>
    </section>
  );
};

export default Everybody;
