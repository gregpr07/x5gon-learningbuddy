import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout";

import { requestHeader } from "../components/functions";

const Signup = props => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const [isError, setIsError] = useState(false);
  const [successfully, setSucessfully] = useState(false);
  //const [error, setError] = useState({});

  // todo set right errors

  const postRegister = e => {
    e.preventDefault();
    fetch(`/rest-auth/registration/`, {
      method: "POST",
      credentials: "same-origin",
      headers: requestHeader(),
      body: JSON.stringify({
        username: userName,
        password1: password,
        password2: password1
      })
    })
      .then(res => {
        if (res.status === 201) {
          setIsError(false);
          setSucessfully(true);
        } else {
          setIsError(true);
          setSucessfully(false);
        }
        return res.json();
      })
      .then(json => {
        console.log(json);
      });
  };
  return (
    <Layout>
      <div className="mx-auto w-25 mt-5 pt-5">
        <p className="text-primary">Registration</p>
        {isError ? <div className="alert alert-danger">Error</div> : null}
        {successfully ? (
          <div className="alert alert-success">
            Created user {userName} successfully{" "}
            <Link to="/login">You can now log in</Link>
          </div>
        ) : null}
        <form onSubmit={postRegister} className="maxer-form mx-auto">
          <div className="form-group">
            <input
              className="form-control"
              type="username"
              value={userName}
              required
              onChange={e => {
                setUserName(e.target.value);
              }}
              placeholder="Choose a username"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              value={password}
              required
              onChange={e => {
                setPassword(e.target.value);
              }}
              placeholder="Choose a password"
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              value={password1}
              required
              onChange={e => {
                setPassword1(e.target.value);
              }}
              placeholder="Repeat password"
            />
          </div>
          <button type="submit" className="button-green px-5 mb-2">
            Sign Up
          </button>
        </form>
        <Link to="/login">Already have an account?</Link>
      </div>
    </Layout>
  );
};

export default Signup;
