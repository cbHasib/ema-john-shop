import React, { useContext, useEffect, useState } from "react";
import "./SignUp.css";

import google from "../../images/google.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const SignUp = () => {
  useEffect(() => {
    document.title = "Register a New Account";
  }, []);

  const [error, setError] = useState(null);

  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password.length < 6) {
      setError("Password should be minimum 6 characters");
      return;
    }

    if (password !== confirm) {
      setError("Your Password did not match");
      return;
    } else {
      setError("");
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" name="email" />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" />
          <br />
          <label htmlFor="confirm">Confirm Password</label>
          <br />
          <input type="password" name="confirm" />
          <br />
          <button type="submit" className="btn-signup">
            Sign Up
          </button>
        </form>

        <p className="login-text">
          Already have an account? <Link to={"/login"}>Login</Link>
        </p>

        <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>

        <div className="or-text">
          <hr />
          <p>OR</p>
          <hr />
        </div>

        <button className="btn-google">
          <img src={google} alt="google login" />
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
