/* eslint-disable no-unused-vars */
import React from 'react'
import styles from "./Contact.module.css"
import { getImageUrl } from '../../utils'

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="email icon" />
                <a href="mailto:rohansinha01@gmail.com">rohansinha01@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
                <a href="https://www.linkedin.com/in/rohan-sinha1/">linkedin.com/in/rohan-sinha1/</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
                <a href="https://github.com/rohansinha01">github.com/rohansinha01</a>
            </li>
        </ul>
    </footer>
  )
}

