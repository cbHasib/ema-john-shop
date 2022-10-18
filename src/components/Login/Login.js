import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import "./Login.css";

const Login = () => {
  useEffect(() => {
    document.title = "Login Your Account";
  }, []);

  const { signIn } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="login-container">
      <div className="signup-card">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" name="email" />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" />
          <button type="submit" className="btn-signup">
            Login
          </button>
        </form>
        <p className="login-text">
          New to Ema-john? <Link to={"/register"}>Create New Account</Link>
        </p>

        <div className="or-text">
          <hr />
          <p>OR</p>
          <hr />
        </div>

        <button className="btn-google">Continue with Google</button>
      </div>
    </div>
  );
};

export default Login;
