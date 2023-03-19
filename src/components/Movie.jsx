const Movie = (movie) => {
  const base_url = "https://image.tmdb.org/t/p/w500";
  const poster = movie?.movie;
  return (
    <div className={movie.className}>
      {console.log(movie.movie)}
      <img
        src={
          poster.backdrop_path.includes("https")
            ? poster.backdrop_path
            : base_url + poster.backdrop_path
        }
        alt={movie.movie.path}
      />
      <p>{movie.movie.title}</p>
    </div>
  );
};

export default Movie;
