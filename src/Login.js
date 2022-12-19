import React, { useState } from "react";

const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState([]);
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      if (data.length > 0) {
        setData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      {data.length > 0 && (
        <div role="contentinfo" title="name" data-testid="contentinfo">
          {data[0]?.name}
        </div>
      )}
      <form
        className="flex flex-col max-w-3xl gap-5 p-5 mx-auto bg-white shadow-sm"
        onSubmit={handleSubmitForm}
      >
        <input
          type="text"
          name="username"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="username"
          className="w-full p-4 border border-gray-200 rounded-lg outline-none"
        />
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          className="w-full p-4 border border-gray-200 rounded-lg outline-none"
        />
        <button
          type="submit"
          className="w-full p-4 text-white bg-blue-500 outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!username || !password}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
