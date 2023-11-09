import { useTranslations } from "next-intl";
import "./ContactForm.scss";
import { useEffect, useState } from "react";

const ContactForm = () => {
  const t = useTranslations("contact");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [errors, setErrors] = useState(false);
  useEffect(() => {
    
    document.addEventListener('submit', function(event) {
      event.preventDefault();
      
      setError(false);
      const myForm = event.target;
      console.log(myForm.email.value, myForm.message.value);
      const formsErrors = validate({
          email: myForm.email.value,
          message: myForm.message.value
      })
      setErrors(formsErrors);
      console.log("errors", errors, formsErrors)
      if (!formsErrors) {
        setLoading(true);
        const formData = new FormData(myForm);
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(formData).toString(),
        })
          .then(() => {
            console.log("Form successfully submitted")
            this.loading = false;
            setError(false);
            setSuccess(true);
          })
          .catch((error) => {
            console.log(error);
            this.loading = false;
            setError(true);
            setSuccess(false);
          })
        } else {
          setLoading(false);
        }
      });
    
  })

  const validate= values => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    let errors = {}
    if (!values.email || !emailRegex.test(values.email)) {
      errors.email = t("emailError");
    }
    if (!values.message) {
      errors.message = t("contact.messageError");
    }
    if ( JSON.stringify(errors) === "{}"){
      errors = false;
    }
    console.log(errors)
    return errors
  }

  return (
    <form name="contact" className="contact-form" id="contact-form" netlify="true">
      {success && (
        <div className="success-message">
          <p>{t('thanks')}</p>
        </div>
      )}
      {(!success || errors) && (
        <>
          <div className="field-container">
            <label className="label" htmlFor="email">
              {t("email")}{" "}
            </label>
            <input type="email" id="email" className="input" name="email" />
            {errors.email && (<p className="error-message" name="email">{t("emailError")}</p>)}
          </div>
          <div className="field-container">
            <label className="label" htmlFor="message">
              {t("message")}{" "}
            </label>
            <textarea id="message" name="message" rows="10" className="text-area" />
            {errors.message && (<p className="error-message" name="message">{t("messageError")}</p>)} 
          </div>
          {error && (
            <div>
              <p>{t('issue')}</p>
            </div>
          )}
          <button className="submit-button" disabled={loading} type="submit">
            {t("send")}
          </button>
        </>
      )}
    </form>
  );
};
export default ContactForm;
