import React, { useEffect, useState } from "react";

const APIComponent = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/user");
      const data = await response.json();
      setName(data.name);
    }
    fetchData();
    return () => {};
  }, []);

  return <>{name && <div role="contentinfo">Your name is {name}</div>}</>;
};

export default APIComponent;
