import "./Skills.scss"
import {useTranslations} from 'next-intl';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faJsSquare, faNode, faWordpress } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle, faCloud, faCodeBranch, faDatabase, faHeart, faTasks, faLaptopCode } from "@fortawesome/free-solid-svg-icons";

const Skills = (props) => {
  const t = useTranslations('skills');
  return (
      <section className="skills">
          <h2>{t("title")}</h2>
          <div className="grid">
              <article className="skill">
                  <header></header>
                  <div className="icon"><FontAwesomeIcon className="fas fa-lg" icon={faJsSquare}/></div>
                  <h3>{t("front")}</h3>
                  <p>{t("front-content")}</p>
              </article>
              <article className="skill">
                  <header></header>
                  <div className="icon"><FontAwesomeIcon className="fas fa-lg" icon={faNode}/></div>
                  <h3>{t("back")}</h3>
                  <p>{t("back-content")}</p>
              </article>
              <article className="skill">
                  <header></header>
                  <div className="icon"><FontAwesomeIcon className="fas fa-lg" icon={faWordpress}/></div>
                  <h3>{t("cms")}</h3>
                  <p>{t("cms-content")}</p>
              </article>
              <article className="skill">
                  <header></header>
                  <div className="icon"><FontAwesomeIcon className="fas fa-lg" icon={faDatabase}/></div>
                  <h3>{t("bdd")}</h3>
                  <p>{t("bdd-content")}</p>
              </article>
              <article className="skill">
                  <header></header>
                  <div className="icon"><FontAwesomeIcon className="fas fa-lg" icon={faCloud}/></div>
                  <h3>{t("cloud")}</h3>
                  <p>{t("cloud-content")}</p>
              </article>
              <article className="skill">
                  <header></header>
                  <div className="icon"><FontAwesomeIcon className="fas fa-lg" icon={faCodeBranch}/></div>
                  <h3>{t("git")}</h3>
                  <p>{t("git-content")}</p>
              </article>
              <article className="skill">
                  <header></header>
                  <div className="icon"><FontAwesomeIcon className="fas fa-lg" icon={faCheckCircle}/></div>
                  <h3>{t("tests")}</h3>
                  <p>{t("tests-content")}</p>
              </article>
              <article className="skill">
                  <header></header>
                  <div className="icon"><FontAwesomeIcon className="fas fa-lg" icon={faTasks}/></div>
                  <h3>{t("project")}</h3>
                  <p>{t("project-content")}</p>
              </article>
              <article className="skill">
                  <header></header>
                  <div className="icon"><FontAwesomeIcon className="fas fa-lg" icon={faLaptopCode}/></div>
                  <h3>{t("languages")}</h3>
                  <p>{t("languages-content")}</p>
              </article>
              <article className="skill">
                  <header></header>
                  <div className="icon"><FontAwesomeIcon className="fas fa-lg" icon={faHeart}/></div>
                  <h3>{t("soft")}</h3>
                  <p>{t("soft-content")}</p>
              </article>

          </div>
          <div className="anchor" id="contact-form"></div>
      </section>
  )
}
export default Skills;
