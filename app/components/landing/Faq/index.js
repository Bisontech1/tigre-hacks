import React from "react";
import { TranslationContext } from "../../../page";
import "./index.css";
import { useTranslationContext } from "../../../layout";
const Faq = () => {
  const { language, setLanguage } = useTranslationContext();

  return (
    <section className="faq">
      <h1>{language?.getString("faq.title")}</h1>
      <div className="row">
        <div className="col">
          <details>
            <summary>
              {language?.getString("faq.whatIsAHackathon.question")}
            </summary>
            <div className="faq__content">
              <p>{language?.getString("faq.whatIsAHackathon.answer")}</p>
            </div>
          </details>
        </div>
        <div className="col">
          <details>
            <summary>
              {language?.getString("faq.neverParticipated.question")}
            </summary>
            <div className="faq__content">
              <p>{language?.getString("faq.neverParticipated.answer")}</p>
            </div>
          </details>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <details>
            <summary>{language?.getString("faq.whenAndWhere.question")}</summary>
            <div className="faq__content">
              <p>{language?.getString("faq.whenAndWhere.answer")}</p>
            </div>
          </details>
        </div>
        <div className="col">
          <details>
            <summary>
              {language?.getString("faq.shouldIHaveATeam.question")}
            </summary>
            <div className="faq__content">
              <p>{language?.getString("faq.shouldIHaveATeam.answer")}</p>
            </div>
          </details>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <details>
            <summary>{language?.getString("faq.canIAssist.question")}</summary>
            <div className="faq__content">
              <p>{language?.getString("faq.canIAssist.answer")}</p>
            </div>
          </details>
        </div>
        <div className="col">
          <details>
            <summary>
              {language?.getString("faq.howMuchDoesItCost.question")}
            </summary>
            <div className="faq__content">
              <p>{language?.getString("faq.howMuchDoesItCost.answer")}</p>
            </div>
          </details>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <details>
            <summary>{language?.getString("faq.oldProject.question")}</summary>
            <div className="faq__content">
              <p>{language?.getString("faq.oldProject.answer")}</p>
            </div>
          </details>
        </div>
        <div className="col">
          <details>
            <summary>
              {language?.getString("faq.whenCanIApply.question")}
            </summary>
            <div className="faq__content">
              <p>{language?.getString("faq.whenCanIApply.answer")}</p>
            </div>
          </details>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <details>
            <summary>
              {language?.getString("faq.whatShouldIBring.question")}
            </summary>
            <div className="faq__content">
              <p>{language?.getString("faq.whatShouldIBring.answer")}</p>
            </div>
          </details>
        </div>
        <div className="col">
          <details>
            <summary>{language?.getString("faq.prizes.question")}</summary>
            <div className="faq__content">
              <p>{language?.getString("faq.prizes.answer")}</p>
            </div>
          </details>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <details>
            <summary>{language?.getString("faq.events.question")}</summary>
            <div className="faq__content">
              <p>{language?.getString("faq.events.answer")}</p>
            </div>
          </details>
        </div>
        <div className="col">
          <details>
            <summary>{language?.getString("faq.freeFood.question")}</summary>
            <div className="faq__content">
              <p>{language?.getString("faq.freeFood.answer")}</p>
            </div>
          </details>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <details>
            <summary>{language?.getString("faq.categories.question")}</summary>
            <div className="faq__content">
              <p>{language?.getString("faq.categories.answer")}</p>
            </div>
          </details>
        </div>
        <div className="col">
          <details>
            <summary>
              {language?.getString("faq.moreQuestions.question")}
            </summary>
            <div className="faq__content">
              <p>{language?.getString("faq.moreQuestions.answer")}</p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
