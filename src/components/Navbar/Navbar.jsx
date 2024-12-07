// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'

import styles from "./Navbar.module.css"
// eslint-disable-next-line no-unused-vars
import {getImageUrl} from "../../utils"
export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
    <a className={styles.title} href="/">Portfolio</a>
    <a href={getImageUrl("hero/Rohan_Sinha_Resume.pdf")} download="Rohan_Sinha_Resume.pdf" className={styles.title}>
          Download Resume
        </a>
    <div className={styles.menu}>
        <img 
            className={styles.menuBtn} 
            src={
                menuOpen 
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)} />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}>
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
  </nav>)
  
}

