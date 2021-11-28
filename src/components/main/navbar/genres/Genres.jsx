import styles from './Genres.module.css'
import React, {  useState } from 'react'

function Genres({ genreList }) {
  const [activeGenre, setActiveGenre] = useState('All')

  return (
    <ul className={styles.genreList}>
      {genreList.map((item) => (
        <li
          key={item.id}
          onClick={() => setActiveGenre(item.title)}
          className={`${styles.genre} ${item.title === activeGenre ? styles.active : ''
            }`}
        >
          {item.title}
        </li>
      ))}
    </ul>
  )
}

export default Genres
