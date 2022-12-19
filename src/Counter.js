import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((c) => c + 1);
  };
  return (
    <div>
      <button
        className="p-2 text-white bg-pink-500 rounded"
        onClick={handleIncrement}
      >
        Increment
      </button>
      <div role="contentinfo">Count is {count}</div>
    </div>
  );
};

export default Counter;
