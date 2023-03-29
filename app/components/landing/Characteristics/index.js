import React from "react";
import { TranslationContext } from "../../../page";
import "./index.css";
const Characteristics = () => {
  const language = React.useContext(TranslationContext);

  return (
    <section className="characteristics">
      <div className="container">
        <div className="back">
          <div className="back2">
            <img
              src="bear.png"
              style={{ width: 110 }}
              alt="A cute bear drawing"
              loading="lazy"
            />
          </div>
        </div>
        <div className="info-container">
          <p className="info">
            <b>{language.getString("mainInfo.hackerFriendly.title")}</b> <br />
            {language.getString("mainInfo.hackerFriendly.description")}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="back" style={{ backgroundColor: "#246C23" }}>
          <div className="back2">
            <img
              src="hands.png"
              style={{ width: 75 }}
              alt="A drawing of 2 hands touching each other"
              loading="lazy"
            />
          </div>
        </div>
        <div className="info-container">
          <p className="info">
            <b>{language.getString("mainInfo.safeSpace.title")}</b> <br />
            {language.getString("mainInfo.safeSpace.description")}
          </p>
        </div>
      </div>
      <div className="container">
        <div className="back" style={{ backgroundColor: "#FF8E01" }}>
          <div className="back2">
            <img
              src="tigers.png"
              style={{ width: 100 }}
              alt="a drawing of a tiger"
              loading="lazy"
            />
          </div>
        </div>
        <div className="info-container">
          <p className="info">
            <b>{language.getString("mainInfo.networkWithOther.title")}</b> <br />
            {language.getString("mainInfo.networkWithOther.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Characteristics;
