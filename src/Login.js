import React, { useState } from "react";

const Login = () => {
  const [username, setUserName] = useState("");
  return (
    <div>
      <form>
        <input
          type="text"
          name=""
          placeholder="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          id=""
        />
        <input type="password" name="" placeholder="password" id="" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
