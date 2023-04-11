import React from "react";
import "./index.css";
import { useTranslationContext } from "contexts";
const Why = () => {
  const { language, setLanguage } = useTranslationContext();

  return (
    <section className="why">
      <div className="row" style={{ alignItems: "center" }} id="why-title">
        <h3>{language?.getString("whyParticipate.title")}</h3>
        <img
          src="circle.png"
          style={{ width: 100 }}
          alt="a blue circle with pikes"
          loading="lazy"
        />
      </div>
      <div className="row">
        <div className="left">
          <h3>
            {language?.getString("whyParticipate.winAwesomePrizes.title")}
          </h3>
          <p>
            {language?.getString("whyParticipate.winAwesomePrizes.description")}
          </p>
        </div>
        <div className="right">
          <div className="image-container">
            <img
              src="hackathons/1.png"
              alt="Main Image"
              className="main-image"
              loading="lazy"
            />
            <img
              src="russian cat.png"
              alt="Little Image"
              className="little-image"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="right">
          <div className="image-container" style={{ marginRight: 60 }}>
            <img
              src="hackathons/2.png"
              alt="Main Image"
              className="main-image"
              loading="lazy"
            />
            <img
              src="psycotiger.png"
              alt="Little Image"
              className="psycotiger"
              loading="lazy"
            />
          </div>
        </div>
        <div className="left">
          <h3>
            {language?.getString("whyParticipate.haveFunCompeting.title")}
          </h3>
          <p>
            {language?.getString("whyParticipate.haveFunCompeting.description")}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="left">
          <h3>{language?.getString("whyParticipate.hackRealProblem.title")}</h3>
          <p>
            {language?.getString("whyParticipate.hackRealProblem.description")}
          </p>
        </div>
        <div className="right">
          <div className="image-container">
            <img
              src="hackathons/3.png"
              alt="Main Image"
              className="main-image"
              loading="lazy"
            />
            <img
              src="cat.png"
              alt="Little Image"
              className="cat"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="right">
          <div
            className="image-container"
            style={{ marginRight: 60 }}
            id="more-than-image"
          >
            <img
              src="hackathons/4.png"
              alt="Main Image"
              className="main-image"
              loading="lazy"
            />
            <img
              src="stamp.png"
              alt="Little Image"
              className="bodega "
              loading="lazy"
            />
          </div>
        </div>
        <div className="left">
          <h3>
            {language?.getString("whyParticipate.moreThanAHackathon.title")}
          </h3>
          <p>
            {language?.getString(
              "whyParticipate.moreThanAHackathon.description"
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Why;
