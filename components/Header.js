import React, { useCallback, useState } from "react"
import "./Header.scss"
import "../styles/global.scss"
import {useTranslations} from 'next-intl';
import Link from "next/link";
import LanguageMenu from "./LanguageMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "next/navigation";
import cvfr from './../public/docs/CV_Frederic_CHAPLIN_JS_2023.pdf';
import cven from './../public/docs/CV_Frederic_CHAPLIN_JS_2023.pdf';


export default function Header({ title, locale }) {
  const [showMenu, setShowMenu] = useState(false)
  const t = useTranslations();
  const params = useParams()
  const getCV = useCallback(() => {
    const lang = params.locale;
    return lang === 'fr' ? cvfr : cven;
  }, [params.locale])

  return (
    <header className="header">
      <Link className="logo-container" href="#top">
          <div className="header_logo" title="Top">
            <img src="/img/logo.png" width="50" height="50" alt="logo"></img>
          </div >
      </Link>
      <div className="header_container">
        <div className="header_menu">
          <Link className="header_link" href="#services"
                title={t('nav.services')}>{t('nav.services')}</Link>
          <Link  className="header_link" href="#skills"
                title={t('nav.skills')}>{t('nav.skills')}</Link>
          <Link className="header_link" href="#contact-form"
                title={t('nav.contact')}>{t('nav.contact')}</Link>
        <a  className="header_link" role="button" tabIndex={0} title={t("nav.contact" )}
                  href={getCV()} target="_blank" rel="noreferrer">{t("nav.resume")}</a>
        </div>
        
        <div className="header_lang-menu">
          <LanguageMenu locale={locale}/>
        </div>

        <div role="button" tabIndex={0} aria-label="Close" className="header_menu-close-button"
             onKeyDown={() => setShowMenu(!showMenu)}
             onClick={() => setShowMenu(!showMenu)}>
          {showMenu
            ? <FontAwesomeIcon icon={faTimes}/>
            : <FontAwesomeIcon icon={faBars}/>
          }
        </div>
        <div className={`header_menu-mobile ${showMenu ? "open" : ""}`}>
          <div role="button" tabIndex={0} className={"header_menu-mobile-buttons"}
               onKeyDown={() => setShowMenu(false)}
               onClick={() => setShowMenu(false)}>
            <a  className="header_link" href="#services">{t("nav.services")}</a>
            <a  className="header_link" href="#skills">{t("nav.skills")}</a>
            <a  className="header_link" href="#contact-form">{t("nav.contact")}</a>
              <a  className="header_link" role="button" tabIndex={0} title={t("nav.contact")}
                  href={getCV()} target="_blank" rel="noreferrer">{t("nav.resume")}</a>
    
          </div>
        </div>
      </div>
      
    </header>
  )
}
