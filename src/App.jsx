import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Insertion from "./components/Insertion";
import Movies from "./components/Movies";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main>
          <h1>Movie List</h1>
          <Insertion className="myinputs" />
          <Movies className="grid" />
        </main>
      </div>
    </Provider>
  );
}

export default App;
