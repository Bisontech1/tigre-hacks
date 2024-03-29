import React from "react";
import "./index.css";
import { useTranslationContext } from "contexts";
const Sponsors = () => {
  const { language, setLanguage } = useTranslationContext();
  return (
    <section className="sponsors">
      <h3>{language?.getString("sponsors.title")}</h3>
      <p>
        {language?.getString("sponsors.label")}{" "}
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
          {language?.getString("sponsors.howToBecomeSponsor")}
        </a>
      </p>
      <h4>{language?.getString("sponsors.poweredBy")}</h4>

      {/* Main Sponsor */}
      <a href="https://www.chubb.com/mx-es/">
        <img
          src="sponsors/chubb.png"
          className="chubb"
          alt="Chubb seguros logo"
          loading="lazy"
        />
      </a>


      {/* Sponsors */}
      <div className="container">
        <div className="image-grid">
          <a className="image-container" href="https://aka.ms" target="_blank">
            <img
              src="sponsors/msft.png"
              alt="Microsoft Azure logo"
              loading="lazy"
            />
          </a>
          <a
            className="image-container"
            href="https://github.com"
            target="_blank"
          >
            <img src="sponsors/github.png" alt="GitHub logo" loading="lazy" />
          </a>
          {/* <a className="image-container">
            <img
              src="sponsors/timhortons.png"
              alt="Tim Hortons logo"
              loading="lazy"
            />
          </a> */}
          <a href="https://mlh.io" target="_blank" className="image-container">
            <img
              src="sponsors/mlh-logo-color.png"
              alt="MLH logo"
              loading="lazy"
            />
          </a>
          <a
            href="https://codigofacilito.com"
            target="_blank"
            className="image-container"
          >
            <img
              src="sponsors/cf.png"
              alt="Codigo Facilito logo"
              loading="lazy"
            />
          </a>
          {/* <a
            href="https://platzi.com"
            target="_blank"
            className="image-container"
          >
            <img src="sponsors/platzi.png" alt="Platzi logo" loading="lazy" />
          </a> */}
          <a
            href="https://instagram.com/donchambitas"
            target="_blank"
            className="image-container"
          >
            <img
              src="sponsors/don-chambitas.jpg"
              alt="Don Chambitas logo"
              loading="lazy"
            />
          </a>
          <a href="https://www.meetup.com/awsugmty/" target="_blank" className="image-container">
            <img src="sponsors/aws.png" alt="AWS logo" loading="lazy" />
          </a>
        </div>
      </div>

      {/* Partners */}
      <div className="container">
        <div className="image-grid">

          <a className="image-container" href="https://appwrite.com" target="_blank">
            <img
              src="sponsors/square-logo-pink.svg"
              alt="AppWrite logo"
              loading="lazy"
            />
          </a>

          <a className="image-container" href="https://auth0.com" target="_blank">
            <img
              src="sponsors/auth0.svg"
              alt="Auth0 logo"
              loading="lazy"
            />
          </a>

          <a className="image-container" href="https://avanade.com" target="_blank">
            <img
              src="sponsors/avanade.png"
              alt="Avanade logo"
              loading="lazy"
            />
          </a>

          <a className="image-container" href="https://capitalone.com" target="_blank">
            <img
              src="sponsors/capitalone.png"
              alt="Capital One logo"
              loading="lazy"
            />
          </a>

          <a className="image-container" href="https://cockroachlabs.com" target="_blank">
            <img
              src="sponsors/cockroachdb.png"
              alt="Cockroach DB logo"
              loading="lazy"
            />
          </a>

          <a className="image-container" href="https://cohere.ai" target="_blank">
            <img
              src="sponsors/cohere.png"
              alt="Cohere logo"
              loading="lazy"
            />
          </a>

          <a className="image-container" href="https://domain.com" target="_blank">
            <img
              src="sponsors/domain.png"
              alt="Domain.com logo"
              loading="lazy"
            />
          </a>

          <a className="image-container" href="https://cloud.google.com" target="_blank">
            <img
              src="sponsors/gcp.png"
              alt="Google Cloud Platform logo"
              loading="lazy"
            />
          </a>

          <a className="image-container" href="https://hedera.com" target="_blank">
            <img
              src="sponsors/hedera_logo.png"
              alt="Hedera logo"
              loading="lazy"
            />
          </a>

          <a className="image-container" href="https://synk.com" target="_blank">
            <img
              src="sponsors/synk.png"
              alt="Synk logo"
              loading="lazy"
            />
          </a>

          <a className="image-container" href="https://twillio.com" target="_blank">
            <img
              src="sponsors/twillio.png"
              alt="Twillio logo"
              loading="lazy"
            />
          </a>

          <a className="image-container" href="https://wix.com" target="_blank">
            <img
              src="sponsors/wix.png"
              alt="Wix logo"
              loading="lazy"
            />
          </a>

        </div>
      </div>
    </section>
  );
};

export default Sponsors;
