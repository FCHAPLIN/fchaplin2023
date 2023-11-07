import { ErrorMessage, Field, Form, Formik, useField } from "formik";
import { useTranslations } from "next-intl";
import "./ContactForm.scss"
import { useState } from "react";

const contact =
  {
    cmsContact: {
      formSuccessMessage: "Merci !",
      formErrorMessage: "Un problème est survenu",
      formId: "1ead9dd9-b085-4fdd-a442-964cb9bced8e",
      portalId: "7989919",
    },
  }

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
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const {
      cmsContact: { formSuccessMessage, formErrorMessage, formId, portalId },
    } = contact
  
    return (
        <>
          <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                message: "",
              }}
              onSubmit={
                (values, actions) => {
                  const isBrowser = typeof window !== "undefined"
                  const hutk = isBrowser ? Cookies.get("hubspotutk") : null
                  const pageUri = isBrowser ? window.location.href : null
                  const pageName = isBrowser ? document.title : null
                  const postUrl = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`
  
                  setLoading(true)
  
                  const body = {
                    submittedAt: Date.now(),
                    fields: [
                      {
                        name: "email",
                        value: values.email,
                      },
                      {
                        name: "message",
                        value: values.message,
                      },
                    ],
                    context: {
                      hutk,
                      pageUri,
                      pageName,
                    },
                  }
  
                  fetch(postUrl, {
                    method: "POST",
                    headers: new Headers({
                      "Content-Type": "application/json",
                      Accept: "application/json, application/xml, text/plain, text/html, *.*",
                    }),
                    body: JSON.stringify(body),
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
                  data-form-id={formId}
                  data-portal-id={portalId}>
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