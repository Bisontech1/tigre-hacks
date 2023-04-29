import "./index.css";
import { InstagramEmbed } from "react-social-media-embed";
import React from "react";
import { useTranslationContext } from "contexts";
import { useState } from "react";

const Contact = () => {
  const { language, setLanguage } = useTranslationContext();
  const [mail, setMail] = useState("")
  const handleEmailRegistration = () => {
    fetch("https://chikoo-bot.herokuapp.com/register", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'email': mail, "display_name": "Hacker" })
    })
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
  }

 
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
              onChange={(e)=> {
                e.preventDefault
                setMail(e.target.value)
              }}
              placeholder={language?.getString("contact.emailForm.placeholder")}
            />
            <button onClick={handleEmailRegistration}>
              {language?.getString("contact.emailForm.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
