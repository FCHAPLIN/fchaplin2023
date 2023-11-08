import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import { useTranslations } from "next-intl";
import "./ContactForm.scss"
import { useEffect, useState } from "react";



  const MyTextArea = ({label, ...props}) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label className="label" htmlFor={props.id || props.name}>{label}</label>
        <textarea className="text-area" {...field} {...props} />
        {meta.touched && meta.error ? (
          <div className="error-message">{meta.error}</div>
        ) : null}
      </>
    );
  };
  const ContactForm = () => {
    const t = useTranslations('contact');
    const contact = {
      cmsContact: {
        formSuccessMessage: t("thanks"),
        formErrorMessage: t("issue"),
      },
    } 
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    
    const {
      cmsContact: { formSuccessMessage, formErrorMessage },
    } = contact
  
    return (
        <>
          <Formik
              initialValues={{
                email: "",
                message: "",
              }}
              onSubmit={
                (values, actions) => {
                  
                  
                  
                  setLoading(true)
                  console.log(values)
                  const formData = new FormData();
                  formData.append('email', values.email);
                  formData.append('message', values.message);
                  
  
                  fetch('/', {
                    method: "POST",
                    headers: new Headers({
                      "Content-Type": "application/x-www-form-urlencoded",
                      Accept: "application/json, application/xml, text/plain, text/html, *.*",
                    }),
                    body: new URLSearchParams(formData).toString(),
                  })
                      .then(res => res.json())
                      .then(() => {
                        setSuccess(true)
                        setError(false)
                        setLoading(false)
                        actions.resetForm()
                      })
                      .catch((err) => {
                        setSuccess(false)
                        setError(err)
                        setLoading(false)
                      })
                      .finally(() => actions.setSubmitting(false))
                } 
              }
              validate={values => {
                const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                const errors = {}
                if (!values.email || !emailRegex.test(values.email)) {
                  errors.email = t("emailError")
                }
                if (!values.message) {
                  errors.message = t("messageError")
                }
                return errors
              }}
          >
  
            <Form name="contact"
                  className="contact-form"
                  id="contact-form"
                  netlify>
              <div className="invite">{t("invite" )}</div>
              {success && (
                  <div>
                    <p>{formSuccessMessage}</p>
                  </div>
              )}
              {(!success) && (
                  <>
                    <div className="field-container">
                      <label className="label" htmlFor="email">{t("email")} </label>
                      <Field id="email" className="input" name="email"/>
                      <div className="error-message">
                        <ErrorMessage name="email"/>
                      </div>
                    </div>
                    <div className="field-container">
                      <MyTextArea
                          id="message"
                          label={t("message")}
                          name="message"
                          rows="10"
                          placeholder=""
                      />
                    </div>
                    {error && (
                        <div>
                          <p>{formErrorMessage}</p>
                        </div>
                    )}
                    <button className="submit-button" disabled={loading} type="submit">{t("send")}</button>
                  </>
              )}
            </Form>
  
          </Formik>
        </>
    )
  }
  export default ContactForm
