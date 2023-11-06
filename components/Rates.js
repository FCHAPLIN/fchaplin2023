import "./Rates.scss"
import {useTranslations} from 'next-intl';

const Rates = () => {
    const t = useTranslations('pricings')

    return (
        <section className="rates">
            <h2>{t("title")}</h2>
            <p>{t("tjm")}</p>
            <p className="rates_text" dangerouslySetInnerHTML={{__html: t.raw("text1" )}}></p>
            <p className="rates_text" dangerouslySetInnerHTML={{__html: t.raw("text2" )}}></p>
            <p className="rates_text--big" dangerouslySetInnerHTML={{__html: t.raw("text3" )}}></p>
            <div className="anchor" id="skills"></div>
        </section>
    )
}
export default Rates
