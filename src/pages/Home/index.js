import { useState } from "react";

import styles from "./styles.module.scss";

import Instagram from "../../assets/instagram.svg";
import Linkedin from "../../assets/linkedin.svg";
import Github from "../../assets/github.svg";
import Whatsapp from "../../assets/whatsapp.svg";
import Download from "../../assets/download.svg";
import Moon from "../../assets/moon.svg";
import Son from "../../assets/son.svg";
import Project from "../../assets/project.jpeg";
import Right from "../../assets/arrow-right.svg";
import Left from "../../assets/arrow-left.svg";
import Link from "../../assets/link.svg";
import Check from "../../assets/check.svg";

export default function Home() {
  const [optionSelected, setOptionSelected] = useState(0);
  const [isDark, setIsDark] = useState(false);

  const handleTheme = () => {
    setIsDark((prevState) => !prevState);
  };

  const experiences = [
    {
      title: "FrontEnd Developer",
      skills: [
        {
          skill: "HTML",
          level: "Advanced",
        },
        {
          skill: "React",
          level: "Intermediary",
        },
        {
          skill: "CSS",
          level: "Advanced",
        },
        {
          skill: "Tailwind",
          level: "Advanced",
        },
        {
          skill: "Javascript",
          level: "Intermediary",
        },
        {
          skill: "Git",
          level: "Advanced",
        },
      ],
    },
    {
      title: "BackEnd Developer",
      skills: [
        {
          skill: "NodeJs",
          level: "Basic",
        },
        {
          skill: "PHP",
          level: "Basic",
        },
        {
          skill: "Java",
          level: "Basic",
        },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <button onClick={handleTheme}>
          <img src={isDark ? Son : Moon} alt="Sol" />
        </button>
      </div>

      <header>
        <div className={styles.perfil}>
          <img src="https://github.com/lucaslimasz.png" alt="" />
        </div>
        <h1>Lucas Lima</h1>
        <span>Front-End Developer</span>
        <div className={styles.medias}>
          <button>
            <img src={Instagram} alt="Instagram" />
          </button>
          <button>
            <img src={Linkedin} alt="Linkedin" />
          </button>
          <button>
            <img src={Github} alt="Github" />
          </button>
        </div>
      </header>

      <section className={styles.contact}>
        <a href="">
          <span>Download CV</span>
          <img src={Download} alt="" />
        </a>
        <button>
          <img src={Whatsapp} alt="" />
        </button>
      </section>

      <section className={styles.slide}>
        <span style={optionSelected ? { right: 7 } : { left: 7 }}></span>
        <button onClick={() => setOptionSelected(0)}>Projetos</button>
        <button onClick={() => setOptionSelected(1)}>Habilidades</button>
      </section>

      {!optionSelected && (
        <>
          <section className={styles.projects}>
            <button>
              <img src={Project} alt="" />
              <span>
                <strong>Titulo</strong>
                <p>Projeto desenvolvido</p>
                <button>
                  <img src={Link} alt="" />
                </button>
              </span>
            </button>
            <button>
              <img src={Project} alt="" />
              <span>
                <strong>Titulo</strong>
                <p>Projeto desenvolvido</p>
                <button>
                  <img src={Link} alt="" />
                </button>
              </span>
            </button>
            <button>
              <img src={Project} alt="" />
              <span>
                <strong>Titulo</strong>
                <p>Projeto desenvolvido</p>
                <button>
                  <img src={Link} alt="" />
                </button>
              </span>
            </button>
            <button>
              <img src={Project} alt="" />
              <span>
                <strong>Titulo</strong>
                <p>Projeto desenvolvido</p>
                <button>
                  <img src={Link} alt="" />
                </button>
              </span>
            </button>
            <button>
              <img src={Project} alt="" />
              <span>
                <strong>Titulo</strong>
                <p>Projeto desenvolvido</p>
                <button>
                  <img src={Link} alt="" />
                </button>
              </span>
            </button>
            <button>
              <img src={Project} alt="" />
              <span>
                <strong>Titulo</strong>
                <p>Projeto desenvolvido</p>
                <button>
                  <img src={Link} alt="" />
                </button>
              </span>
            </button>
          </section>
          <div className={styles.actions}>
            <button>
              <img src={Left} alt="Esquerdo" />
            </button>
            <button>
              <img src={Right} alt="Direito" />
            </button>
          </div>
        </>
      )}

      {optionSelected ? (
        <div className={styles.skills}>
          {experiences.map((experience) => (
            <>
              <h1>{experience.title}</h1>
              <ul>
                {experience.skills.map((skills) => (
                  <li>
                    <img src={Check} alt="" />
                    <div>
                      <strong>{skills.skill}</strong>
                      <span>{skills.level}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          ))}
        </div>
      ) : null}
    </div>
  );
}
