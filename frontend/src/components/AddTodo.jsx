import axios from "axios";
import React, { useState } from "react";

function addTodo() {
  // taking data from the body
  let [data, setdata] = useState({
    title: "",
    description: "",
  });

  // handling the changes
  const handleChange = (e) => {
    const value = e.target.value;

    setdata({
      ...data,
      [e.target.name]: value,
    });
  };

  //   submit button
  const addTodoTodatabase = async function (e) {
    e.preventDefault();
    const submitValues = {
      title: data.title,
      description: data.description,
    };

    console.log;
    await axios
      .post("http://localhost:8000/todo/addTodo", submitValues)
      .then(() => {
        console.log(submitValues);
        setdata({
          title: "",
          description: "",
        });

        console.log("added todo successfully");
      })
      .catch((err) => {
        console.log("some error while sending your data :", err);
      });
  };
  return (
    <>
      <div className="w-5/6 m-auto min-h-fit h-3/5 backdrop-blur-0 border-gray-800 border rounded-3xl p-10 space-y-5 shadow-2xl">
        <h1>Add your todos</h1>
        <label htmlFor="title" className="text-xl ml-0 ">
          Title :
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={data.title}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <label htmlFor="decription" className="text-xl mb-0 mt-3 ">
          Description :
        </label>

        <input
          type="text"
          id="description"
          name="description"
          value={data.description}
          onChange={handleChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button onClick={addTodoTodatabase} name="addTodo">
          Add Todo
        </button>
      </div>
    </>
  );
}

export default addTodo;
