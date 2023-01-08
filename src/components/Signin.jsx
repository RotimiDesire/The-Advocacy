import { async } from "@firebase/util";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import "../styles/Sign.css";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/main");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <main className="main">
      <img
        src="https://images.unsplash.com/photo-1633409361618-c73427e4e206?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnJhbmR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="form">
        <h3>Sign in to your account</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <label>Email:</label>
            </div>
            <input type="email" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <div>
              <label>Password:</label>
            </div>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn">Sign in</button>
        </form>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="para">
            Sign up.
          </Link>
        </p>
      </div>
    </main>
  );
}
