/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { getImageUrl } from '../../utils';
import styles from "./Bibliography.module.css"

const Bibliography = () => {
const [bibOpen, setBibOpen] = useState(false);
  return (
    <footer>
        <div className={styles.menu}>
        <button className={styles.bibBtn} 
        onClick={() => setBibOpen(!bibOpen)}
        >Sources </button> 
    <ul className={`${styles.bibItems} ${bibOpen && styles.bibOpen}`}
        onClick={() => setBibOpen(false)}>
    <li><a href="http://www.freepik.com">Designed by Freepik</a></li>
    <li><a href="https://www.flaticon.com/free-icons/css" title="css icons">Css icons created by Pixel perfect - Flaticon</a></li>
    <li><a href="https://www.flaticon.com/free-icons/html-5" title="html 5 icons">Html 5 icons created by Freepik - Flaticon</a></li>
    <li><a href="https://www.flaticon.com/free-icons/react" title="react icons">React icons created by Freepik - Flaticon</a></li>
    <li><a href="https://www.flaticon.com/free-icons/nodejs" title="nodejs icons">Nodejs icons created by Freepik - Flaticon</a></li>
    <li><a href="https://www.flaticon.com/free-icons/javascript" title="javascript icons">Javascript icons created by Freepik - Flaticon</a></li>
    <li><a href="https://www.flaticon.com/free-icons/typescript" title="typescript icons">Typescript icons created by Freepik - Flaticon</a></li>
  </ul>
  </div>
  </footer>
  )
}

export default Bibliography