import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../slices/movieSlice";
const Insertion = (props) => {
  const movies = useSelector((state) => {
    state.movies;
  });

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const dispatch = useDispatch();
  return (
    <div className={props.className}>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(addMovie({ name, poster }));
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Insertion;
