import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovies, getAllMovies } from "../slices/movieSlice";
import Movie from "./Movie";

const Movies = (props) => {
  const movies = useSelector(getAllMovies);
  const dispatch = useDispatch();

  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=d4c40411935d66fcdef9eb6718039e2e&language=en-US&page=1";
  useEffect(() => {
    fetchPopular();
  }, []);
  const fetchPopular = async () => {
    const response = await fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error(error));

    dispatch(addMovies([...response.results]));
  };

  // useEffect(() => {
  //   dispatch(addMovies([...moves.results]));
  // }, []);

  return (
    <div className={props.className}>
      {movies.map((movie, index) => {
        return <Movie className="movie" key={index} movie={movie} />;
      })}
    </div>
  );
};

export default Movies;
