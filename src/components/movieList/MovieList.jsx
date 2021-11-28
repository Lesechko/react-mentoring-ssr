import React from 'react'
import Movie from './movie/Movie'

import styles from './MovieList.module.css'

const MovieList = ({ list, onSelect,onDelete, onEdit }) => {

  return (
    list && (
        <div className={styles['movie-list']}>
          {list.map((movie) => (
            <Movie movie={movie} onClick={() => onSelect(movie.id)} key={movie.id}/>
          ))}
        </div>
    )
  )
}

export default MovieList
