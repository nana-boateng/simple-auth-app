import { useState } from "react";

// components
import Card from "./Card";
import Register from "./Register";
import Login from "./Login";

// style
import "./style/styles.css";

export default function AuthForm() {
  const [form, setForm] = useState("register");
  return (
    <Card>
      <div className="auth-heading">
        <h2 className="sly-button" onClick={() => setForm("register")}>
          Register
        </h2>
        <h2 className="sly-button" onClick={() => setForm("login")}>
          Login
        </h2>
      </div>
      {form === "register" && <Register />}
      {form === "login" && <Login />}
    </Card>
  );
}
