import "./index.css";
import { InstagramEmbed } from "react-social-media-embed";
import React from "react";
import { useTranslationContext } from "contexts";

const Contact = () => {
  const { language, setLanguage } = useTranslationContext();

  return (
    <section className="contact">
      <div className="container">
        <div className="column-left">
          <div className="instagram-post">
            <div style={{ display: "flex", justifyContent: "center" }}>
              <InstagramEmbed
                url="https://www.instagram.com/p/CkEAEN8Olve/?utm_source=ig_web_copy_link"
                id="embed"
              />
            </div>
          </div>
        </div>
        <div
          className="column-right"
          style={{
            alignItems: "flex-start",
            height: "100%",
            textAlign: "center",
          }}
        >
          <h2>{language?.getString("contact.title")}</h2>
          <p>{language?.getString("contact.description")}</p>
          <h3>{language?.getString("contact.newsLetter")}</h3>
          <p>{language?.getString("contact.newsLetterLabel")}</p>
          <form action="#">
            <label htmlFor="email">
              {language?.getString("contact.emailForm.label")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={language?.getString("contact.emailForm.placeholder")}
            />
            <button type="submit">
              {language?.getString("contact.emailForm.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
