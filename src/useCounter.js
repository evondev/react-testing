import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount((c) => c + 1);
  };
  return {
    count,
    handleIncrement,
  };
}
