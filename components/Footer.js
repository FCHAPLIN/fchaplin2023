import { faLinkedin, faSkype, faTwitter } from "@fortawesome/free-brands-svg-icons";
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
              <a className="footer-link" title="skype" target="_blank" rel="noopener noreferrer" href="https://join.skype.com/invite/jh6d0ehn7pC0">
              <FontAwesomeIcon className="fas fa-lg" icon={faSkype}/>
              </a>
          </div>
          <div>
          <a className="footer-link" title="twitter" target="_blank" rel="noopener noreferrer" href="https://twitter.com/fredchaplin">
            <FontAwesomeIcon className="fas fa-lg" icon={faTwitter}/>
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
