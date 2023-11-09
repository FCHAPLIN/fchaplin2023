import { faGitlab, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer className="footer">
      <div className="logo">
        <div role="button" tabIndex={0}
             onClick={() => scrollTo('#top')}
             onKeyDown={() => scrollTo('#top')}
             className="footer_logo" title="Top">
          <img src="/img/logo.png" alt="logo" width="100" height="100"></img>
        </div >
      </div>
      <div className="links-container">
        <p>Frederic CHAPLIN<br/>11 Cami du Chevalet<br/>34560 Montbazin - FRANCE<br/>Siret: 513 878 363 00029</p>
      </div>
      <div className="social">
          <div>
              <a className="footer-link" title="skype" target="_blank" rel="noopener noreferrer" href="https://web.whatsapp.com/send/?phone=33663771374">
              <FontAwesomeIcon className="fas fa-lg" icon={faWhatsapp}/>
              </a>
          </div>
          <div>
          <a className="footer-link" title="gitlab" target="_blank" rel="noopener noreferrer" href="https://gitlab.com/FCHAPLIN">
            <FontAwesomeIcon className="fas fa-lg" icon={faGitlab}/>
          </a>
        </div>
        <div>
          <a className="footer-link" title="linkedin" target="_blank" rel="noopener noreferrer"  href="https://www.linkedin.com/in/frederic-chaplin/">
          <FontAwesomeIcon className="fas fa-lg" icon={faLinkedin}/>
          </a>
        </div>
      </div>
    </footer>
    </>
  )
}
