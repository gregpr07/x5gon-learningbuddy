import React from "react";

import { Layout } from "../components/layout";
import { Navbar } from "../components/components";

const curated = () => {
  fetch("/users/all/").then(res => console.log(res));
};

const Homepage = props => {
  curated();
  return (
    <Layout>
      <Navbar />
      <div className="jumbotron bg-dark">
        <h1 className="display-3">Hello, world!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <div className="lead">
          <div className="btn btn-primary btn-lg" role="button">
            Learn more
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Homepage;
