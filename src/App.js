import "./App.css";
import React, { useState } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

function Counter() {
  const [value, setValue] = useState(0);

  const add = () => {
    setValue(value + 1);
  };
  const subtract = () => {
    setValue(value - 1);
  };
  return (
    <div className="division">
      <div>
        <button
          onClick={subtract}
          disabled={value === 0}
          className="action-button"
        >
          <AiOutlineLeft className="arrow" />
        </button>
        <h1 className="heading">{value}</h1>
        <button onClick={add} className="action-button">
          <AiOutlineRight className="arrow" />
        </button>
      </div>
    </div>
  );
}

export default Counter;
