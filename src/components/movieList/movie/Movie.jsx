import React, { useMemo, useRef } from 'react'
import styles from './Movie.module.css'

const Movie = ({ movie, onClick }) => {
  const year = useMemo(
    () => new Date(movie.release_date).getFullYear(),
    [movie.release_date],
  )

  return (
    <div data-movie={movie.id} className={styles.movie} onClick={onClick} id='movie'>
      <div className={styles.imgWrapper}>
        <img
          src={movie.poster_path}
          alt={movie.title}
          className={styles.img}
          data-movie={movie.id}
        ></img>
      </div>
      <div className={styles.content}>
        <div className={styles.discription} data-movie={movie.id}>
          <div className={styles.title}>{movie.title}</div>
          <div className={styles.genre}>{movie.genres.join(' ')}</div>
        </div>
        <div className={styles.year}>{year}</div>
      </div>
    </div>
  )
}

export default Movie
