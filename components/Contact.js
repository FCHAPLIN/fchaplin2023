import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";
import "./Contact.scss"

const Contact = () => {
  const t = useTranslations('contact');
    return (
        <section className="contact">
            <h2>{t("title")}</h2>
            <ContactForm/>
        </section>
    )
}
export default Contact
