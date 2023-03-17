import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovies, getAllMovies } from "../slices/movieSlice";
import Movie from "./Movie";

const Movies = (props) => {
  const movies = useSelector(getAllMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      addMovies([
        {
          name: "Cocaine Bear",
          poster:
            "https://img.yts.mx/assets/images/movies/cocaine_bear_2023/medium-cover.jpg",
        },
        {
          name: "A Man Called Otto",
          poster:
            "https://img.yts.mx/assets/images/movies/a_man_called_otto_2022/medium-cover.jpg",
        },
        {
          name: "The Nomad",
          poster:
            "https://img.yts.mx/assets/images/movies/the_nomad_2023/medium-cover.jpg",
        },
      ])
    );
  }, []);

  return (
    <div className={props.className}>
      {movies.map((value, index) => {
        return <Movie className="movie" key={index} data={value} />;
      })}
    </div>
  );
};

export default Movies;
