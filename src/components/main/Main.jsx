import React, { useEffect, useMemo, useState } from "react";
import Navbar from "./navbar/Navbar";
import MovieList from "../movieList/MovieList";
import { GenreItems } from "./navbar/genres/GenresConstants";
import { fetchMovies } from "../../modules/movies";
import styles from "./Main.module.css";
import { connect } from 'react-redux'

const Main = ({movies, dispatch}) => {
  const [genres, setGenres] = useState(GenreItems);

  useEffect(() => {
    fetchMovies()(dispatch);
  }, []);

  const onGenreClick = id => {
    const updateGenres = genres.map(item => ({
      ...item,
      active: item.id === id
    }));

    setGenres(updateGenres);
  };

  const onSortChange = (sortBy, sortOrder) =>
    queryService.addParams({
      [MovieParam.SortBy]: sortBy,
      [MovieParam.SortOrder]: sortOrder
    });
  const moviesCount = useMemo(() => movies.length, [movies.length]);

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <Navbar
          genres={genres}
          onGenreClick={onGenreClick}
          onSortChange={onSortChange}
        />
        <div className={styles["movies-counter"]}>
          <span className={styles["number"]}>{moviesCount}</span> movies found
        </div>
        <MovieList list={movies} />
      </div>
    </div>
  );
};

 function mapStateToProps(state) {
  return {
    movies: state.movies.movieList,
  }
}

export default connect(mapStateToProps)(Main);
