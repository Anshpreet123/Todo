import React, { useState } from "react";

function Button({ value, color }) {
  const handleClick = async function () {
    if (value == "Done") {
    }
  };
  return (
    <button
      onClick={handleClick}
      style={{ backgroundColor: color, color: "white" }}
    >
      {value}
    </button>
  );
}

export default Button;
