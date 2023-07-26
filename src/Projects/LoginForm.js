import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserContext";

const LoginForm = () => {
  const { setUserContext, setUser } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = { email: email, password: password };
    setUser(user);
  };
  return (
    <div className="flex-col justify-center items-center w-full mx-auto text-center h-screen border">
      <input
        type="text"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mt-8 border"
      />{" "}
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mt-8 border"
      />
      <br />
      <button
        className="bg-black px-2 py-1 mt-8 text-white"
        onClick={handleLogin}
      >
        SignIn
      </button>
    </div>
  );
};

export default LoginForm;
