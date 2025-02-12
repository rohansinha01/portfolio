/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils.js";


export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Rohan</h1>
        <p className={styles.description}>
          I am a full-stack developer. If you have any questions, please feel
          free to reach out to me!
        </p>
        <div className={styles.buttons}>
        <a href="mailto:rohansinha01@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        {' '}
        <a href={getImageUrl("hero/Rohan_Sinha_Resume.pdf")} download="Rohan_Sinha_Resume.pdf" className={styles.contactBtn}>
          Download Resume
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/Headshot.JPG")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
