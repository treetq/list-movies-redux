import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMovie } from "../slices/movieSlice";
const Insertion = (props) => {
  // const movies = useSelector((state) => {
  //   state.movies;
  // });

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const dispatch = useDispatch();
  return (
    <div className={props.className}>
      <form>
        <input
          type="text"
          value={name}
          placeholder="The Movie name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          value={poster}
          placeholder="The Movie url"
          onChange={(e) => setPoster(e.target.value)}
          required
        />
        <button
          disabled={!(name && poster)}
          onClick={(e) => {
            e.preventDefault();
            dispatch(addMovie({ title: name, backdrop_path: poster }));
            setName("");
            setPoster("");
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Insertion;
