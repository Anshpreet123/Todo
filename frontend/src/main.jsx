import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import AddTodo from "./components/addTodo.jsx";
import ShowTodo from "./components/showTodo.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<AddTodo />} />
      <Route
        path="/show"
        element={
          <>
            <AddTodo />
            <ShowTodo />
          </>
        }
      />
    </>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
    {/* <App />
     */}
  </React.StrictMode>,
);
