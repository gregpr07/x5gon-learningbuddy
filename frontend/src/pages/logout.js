import React from "react";

import { requestHeader } from "../components/functions";

const Logout = props => {
  localStorage.removeItem("user");

  fetch(`/rest-auth/logout/`, {
    method: "POST",
    credentials: "same-origin",
    headers: requestHeader()
  }).then(res => console.log(res.json()));
  window.location.href = "/";
  return <div></div>;
};

export default Logout;
