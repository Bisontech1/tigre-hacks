import React from "react";
import { TranslationContext } from "../../../page";
import "./index.css";
const What = () => {
  const language = React.useContext(TranslationContext);

  return (
    <section className="what">
      <div className="text-desc">
        <h3>{language.getString("mainInfo.title")}</h3>
        <p className="description">
          {language.getString("mainInfo.description1")}{" "}
          <b>{language.getString("mainInfo.description2")}</b>{" "}
          {language.getString("mainInfo.description3")}
        </p>
      </div>
      <div className="right">
        <img
          className="what-img"
          src="what.png"
          alt="participants in a hackathon with computers"
          loading="lazy"
        />
        <img
          className="big-star"
          src="Star.png"
          style={{ top: 0, right: 0 }}
          alt="A star in the top right corner of the image"
          loading="lazy"
        />
        <img
          className="little-star"
          src="Star.png"
          style={{ top: 0, right: 60 }}
          alt="A star in the bottom left corner of the image"
          loading="lazy"
        />
        <img
          className="big-star"
          src="Star.png"
          style={{ bottom: 0, left: 0 }}
          alt="A star in the bottom left corner of the image"
          loading="lazy"
        />
        <img
          className="little-star"
          src="Star.png"
          style={{ bottom: 0, left: 60 }}
          alt="A star in the bottom right corner of the image"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default What;
