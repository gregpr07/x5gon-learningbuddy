import React, { useState } from "react";
import { Link } from "react-router-dom";

import { requestHeader } from "../components/functions";

const Login = () => {
  const setTokens = data => {
    if (data) {
      localStorage.setItem("user", data);
    } else {
      localStorage.removeItem("user");
    }
    window.location.href = "/";
  };
  const [isError, setIsError] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const postLogin = e => {
    e.preventDefault();
    fetch(`/rest-auth/login/`, {
      method: "POST",
      credentials: "same-origin",
      headers: requestHeader(),
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
      .then(res => {
        if (res.status === 400) {
          throw Error(400);
        }
        return res.json();
      })
      .then(json => {
        console.log(json);
        setTokens(json.key);
      })
      .catch(rejection => {
        console.log(rejection);
        setIsError(true);
      });
  };

  return (
    <div className="mx-auto w-25 mt-5 pt-5">
      <div>
        {isError ? (
          <div className="alert alert-danger text-center">
            Wrong username or password
          </div>
        ) : null}
        <form onSubmit={postLogin} className="maxer-form mx-auto">
          <div className="form-group">
            <input
              className="form-control"
              type="username"
              value={username}
              onChange={e => {
                setUsername(e.target.value);
              }}
              required
              placeholder="Choose username"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
              required
              placeholder="Choose password"
            />
          </div>
          <div className="row">
            <div className="ml-3">
              <button type="submit" className="button-green px-5 mb-2">
                Login
              </button>
            </div>
          </div>
        </form>
      </div>

      <Link to="/signup">Don't have an account?</Link>
    </div>
  );
};

export default Login;
