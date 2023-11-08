import { useTranslations } from "next-intl";
import "./ContactForm.scss";
import { useState } from "react";

const ContactForm = () => {
  const t = useTranslations("contact");

  const [loading, setLoading] = useState(false);

  return (
    <form name="contact" className="contact-form" id="contact-form" netlify="trueÒ">
      <div className="invite">{t("invite")}</div>
      <div className="field-container">
        <label className="label" htmlFor="email">
          {t("email")}{" "}
        </label>
        <input type="email" id="email" className="input" name="email" />
      </div>
      <div className="field-container">
        <label className="label" htmlFor="message">
          {t("message")}{" "}
        </label>
        <textarea id="message" name="message" rows="10" className="text-area" />
      </div>
      <button className="submit-button" disabled={loading} type="submit">
        {t("send")}
      </button>
    </form>
  );
};
export default ContactForm;
