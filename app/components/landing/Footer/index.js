import React from "react";
import { TranslationContext } from "../../../page";
import "./index.css";
const Footer = () => {
  const language = React.useContext(TranslationContext);

  return (
    <>
      {/*  FOOTER START */}
      <div className="footer">
        <div className="inner-footer">
          {/*  for company name and description */}
          <div className="footer-items">
            <img src="logo.png" className="footer-logo" loading="lazy" />
            <p>{language?.getString("footer.label")}</p>
          </div>
          {/*  for quick links  */}
          <div className="footer-items">
            <h3>{language?.getString("footer.quickLinks.title")}</h3>
            <div className="border1" /> {/*for the underline */}
            <ul>
              <a href="#">
                <li>{language?.getString("footer.quickLinks.whatIs")}</li>
              </a>
              <a href="#">
                <li>
                  {language?.getString("footer.quickLinks.whyParticipate")}
                </li>
              </a>
              <a href="#">
                <li>{language?.getString("footer.quickLinks.sponsors")}</li>
              </a>
              <a href="#">
                <li>{language?.getString("footer.quickLinks.contact")}</li>
              </a>
            </ul>
          </div>
          {/*  for some other links */}
          <div className="footer-items">
            <h3>{language?.getString("footer.codeOfConduct.title")}</h3>
            <div className="border1" /> {/*for the underline */}
            <ul>
              <a href="#">
                <li>{language?.getString("footer.codeOfConduct.link")}</li>
              </a>
            </ul>
          </div>
          {/*  for contact us info */}
          <div className="footer-items">
            <h3>{language?.getString("footer.contactUs.title")}</h3>
            <div className="border1" />
            <ul>
              <li>
                <i className="fa fa-map-marker" aria-hidden="true" />
                {language?.getString("footer.contactUs.place")}
              </li>
              <li>
                <i className="fa fa-phone" aria-hidden="true" />
                {language?.getString("footer.contactUs.phoneNumber")}
              </li>
              <li>
                <i className="fa fa-envelope" aria-hidden="true" />
                {language?.getString("footer.contactUs.email")}
              </li>
            </ul>
            {/*   for social links */}
            <div className="social-media">
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
              <a href="#">
                <i className="fab fa-facebook" />
              </a>
              <a href="#">
                <i className="fab fa-google-plus-square" />
              </a>
            </div>
          </div>
        </div>
        {/*   Footer Bottom start  */}
        <div className="footer-bottom">
          {language?.getString("footer.copyright")}
        </div>
      </div>
      {/*   Footer Bottom end */}
      {/*   FOOTER END */}
    </>
  );
};

export default Footer;
