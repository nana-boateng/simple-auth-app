import { useState } from "react";

import "./style/styles.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    // TODO : API call for login
    console.log("Login details: ", email, password);
  }

  return (
    <>
      <input
        type="email"
        name="email"
        className="input"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        name="password"
        className="input"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit" className="button" onClick={handleLogin}>
        Login
      </button>
    </>
  );
}
