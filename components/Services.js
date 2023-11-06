import "./Services.scss"
import {useTranslations} from 'next-intl';

const Services = () => {
  const t = useTranslations('services');
  return (
          <section className="services">
            <div className="grid-container">
                <h2>{t("title")}</h2>
                <p className="services-text"
                  dangerouslySetInnerHTML={{__html: t.raw('text1')}}></p>
                <p className="services-text"
                   dangerouslySetInnerHTML={{__html: t.raw('text2')}}></p>
                <div className="grid">
                    <article className="service">
                        <header className="service_cover"
                                style={{backgroundImage: 'url("/img/glenn-carstens-peters-small.webp")'}}></header>
                        <div className="service_content">
                            <h3 className="service_title">{t("study")}</h3>
                            <p className="service_text"
                               dangerouslySetInnerHTML={{__html: t.raw('study-content')}}></p>
                        </div>
                    </article>
                    <article className="service">
                        <header className="service_cover"
                                style={{backgroundImage: 'url("/img/new-data-services-Ar-iTL4QKl4-unsplash-small.webp")'}}></header>
                        <div className="service_content">
                            <h3 className="service_title">{t("websites")}</h3>
                            <p className="service_text"
                               dangerouslySetInnerHTML={{__html: t.raw('websites-content')}}></p>
                        </div>
                    </article>
                    <article className="service">
                        <header className="service_cover"
                                style={{backgroundImage: 'url("/img/shahadat-rahman-small.webp")'}}></header>
                        <div className="service_content">
                            <h3 className="service_title">{t("dev")}</h3>
                            <p className="service_text"
                               dangerouslySetInnerHTML={{__html: t.raw('dev-content')}}></p>
                        </div>
                    </article>
                    <article className="service">
                        <header className="service_cover"
                                style={{backgroundImage: 'url("/img/rob-hampson-small.webp")'}}></header>
                        <div className="service_content">
                            <h3 className="service_title">{t("pwa")}</h3>
                            <p className="service_text"
                               dangerouslySetInnerHTML={{__html: t.raw('pwa-content')}}></p>
                        </div>
                    </article>
                    <article className="service">
                        <header className="service_cover"
                                style={{backgroundImage: 'url("/img/pankaj-patel-small.webp")'}}></header>
                        <div className="service_content">
                            <h3 className="service_title">{t("pipelines")}</h3>
                            <p className="service_text"
                               dangerouslySetInnerHTML={{__html: t.raw('pipelines-content')}}></p>
                        </div>
                    </article>
                    <article className="service">
                        <header className="service_cover"
                                style={{backgroundImage: 'url("/img/ut-small.webp")'}}></header>
                        <div className="service_content">
                            <h3 className="service_title">{t("tu")}</h3>
                            <p className="service_text"
                               dangerouslySetInnerHTML={{__html: t.raw('tu-content')}}></p>
                        </div>
                    </article>
                    <article className="service">
                        <header className="service_cover"
                                style={{backgroundImage: 'url("/img/z-yu-small.webp")'}}></header>
                        <div className="service_content">
                            <h3 className="service_title">{t("debt")}</h3>
                            <p className="service_text"
                               dangerouslySetInnerHTML={{__html: t.raw('debt-content')}}></p>
                        </div>
                    </article>
                    <article className="service">
                        <header className="service_cover"
                                style={{backgroundImage: 'url("/img/headway-small.webp")'}}></header>
                        <div className="service_content">
                            <h3 className="service_title">{t("mentoring")}</h3>
                            <p className="service_text"
                               dangerouslySetInnerHTML={{__html: t.raw('mentoring-content')}}></p>
                        </div>
                    </article>
                </div>
            </div>
            <div className="anchor" id="rates"></div>
        </section>
  )
}

export default Services
