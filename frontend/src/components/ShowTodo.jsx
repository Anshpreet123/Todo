import React, { useEffect, useState } from "react";
import Button from "./Button.jsx";
import axios from "axios";

function showTodo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const res = async () => {
        const response = await axios.get("http://localhost:8000/todo/showTodo");
        console.log(response.data);

        setData(response.data);
        console.log(data);
      };
      res();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // console.log(typeof data);
  // console.log(data);

  // const dataArray = data[data];
  // console.log(dataArray.data);
  console.log(typeof data);
  return (
    <>
      {data.map((items) => (
        <div className="w-4/5 p-10 border border-blue-600 m-auto mt-7 min-h-fit h-52 space-y-4 gap-5 ">
          <h3 className="w-5/6 text-xl min-w-fit h-auto min-h-fit overflow-auto border ">
            {items.title}
          </h3>
          <p className="w-5/6 text-xl min-w-fit h-auto min-h-fit overflow-auto border">
            {items.description}
          </p>
          <div className=" flex float-right space-x-20">
            <Button value={"Done"} color={"green"} />
            <Button value={"Edit"} color={"yellow"} />
            <Button value={"Delete"} color={"red"} />
          </div>
        </div>
      ))}
    </>

    // <>
    //   {data.map((ele) => {
    //     <div className="w-4/5 p-10 border border-blue-600 m-auto mt-7 min-h-fit h-52 space-y-4 gap-5 ">
    //       <h3 className="w-5/6 text-xl min-w-fit h-auto min-h-fit overflow-auto border ">
    //         {ele.title}
    //       </h3>
    //       <p className="w-5/6 text-xl min-w-fit h-auto min-h-fit overflow-auto border">
    //         {ele.description}
    //       </p>
    //       <div className=" flex float-right space-x-20">
    //         <Button value={"Done"} color={"green"} />
    //         <Button value={"Edit"} color={"yellow"} />
    //         <Button value={"Delete"} color={"red"} />
    //       </div>
    //     </div>;
    //   })}
    // </>
  );
}

export default showTodo;
