import  React from 'react'
import styles from './Navbar.module.css'
import Genres  from './genres/Genres'
// import { Sorting } from '../../common'
import { GenreItems } from './genres/GenresConstants'
// import { sortingItem, SortingType } from '../../common/sorting/Sorting.constants'

const Navbar = ({
  genres,
  onGenreClick,
  onSortChange,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navbar}>
        <Genres genreList={genres} onGenreClick={onGenreClick}></Genres>
        {/* <Sorting
          sortingItem={sortingItem}
          onItemTriggered={onSortChange}
        ></Sorting> */}
      </div>
      <div className={styles.line} />
    </div>
  )
}

export default Navbar
