import { useState } from "react";
import "./App.css";
import axios from "axios";
import AddTodo from "./components/addTodo.jsx";
import ShowTodo from "./components/showTodo.jsx";

function App() {
  return (
    <>
      {/* <h1 className="w-5/6 bg-zinc-800 caret-yellow-400">This by vite</h1> */}
      <AddTodo />
      <ShowTodo />
    </>
  );
}

export default App;
