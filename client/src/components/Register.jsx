import { useState } from "react";

import "./style/styles.css";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegister() {
    // TODO: API Call for user registration
    console.log("Registration information: ", userName, email, password);
  }

  return (
    <>
      <input
        className="input"
        placeholder="Name"
        onChange={(event) => setUserName(event.target.value)}
      />
      <input
        type="email"
        name="email"
        className="input"
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        type="password"
        name="password"
        className="input"
        placeholder="Password"
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit" className="button" onClick={handleRegister}>
        Register
      </button>
    </>
  );
}
