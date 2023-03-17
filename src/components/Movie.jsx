const Movie = (props) => {
  return (
    <div className={props.className}>
      {console.log(props.data)}
      <img src={props.data.poster} alt="" />
      <p>{props.data.name}</p>
    </div>
  );
};

export default Movie;
