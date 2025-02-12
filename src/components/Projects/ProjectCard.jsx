/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import styles from "./ProjectCard.module.css"
// import { getImageUrl } from '../../utils'

export const ProjectCard = ({
    // eslint-disable-next-line react/prop-types
    project: { title, description, skills, demo, source, /*imageSrc */ }
}) => {

  return (
    <div className={styles.container}>
    {/* <img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} className={styles.image} /> */}
    <h3 className={styles.title}>{title}</h3>
    <p className={styles.description}>{description}</p>
    <ul className={styles.skills}>
        {skills.map((skill, id) => {
            return (
            <li key={id} className={styles.skill}>{skill}</li>
        )}
)}
    </ul>
    <div className={styles.links}>
        <a href={demo} className={styles.link}>Link</a>
        <a href={source} className={styles.link}>Github</a>
    </div>
</div>
  )
}

