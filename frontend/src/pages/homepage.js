import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout";

import playlistsimg from "../images/playlists.jpg";
import discoveryimg from "../images/OER-connected.png";
import transimg from "../images/transparency.png";

const Homepage = props => {
  const Header = () => (
    <div className="jumbotron mb-0 text-primary">
      <h1 className="display-4 w-75 mx-auto">
        Building educational communities
      </h1>
      <p className="lead w-75 mx-auto">
        Match student according to their interests and skill{" "}
      </p>
    </div>
  );

  const P1 = () => (
    <div className="container text-primary">
      <img
        src={playlistsimg}
        alt="playlists"
        width="50%"
        style={{ maxWidth: "400px" }}
      />
      <h3 className="mt-2">Foundations of quality education</h3>
      <div className="row mt-3 mb-2 mx-auto w-50">
        <p className="col h5 text-info">
          Access to quality educational resources
        </p>
        <p className="col h5 text-info">Access to learning community</p>
      </div>
      <hr />
      <div className="mx-auto w-50 pt-2 pt-5">
        <h5>Who is the best learning buddy?*</h5>
        <ul className="list-group list-group-flush mt-4 mb-2">
          <li className="list-group-item ">
            Someone who has similar interests
          </li>
          <li className="list-group-item">
            Someone who has similar skill level in relevant topics
          </li>
        </ul>
      </div>
      <div className="text-muted pb-4">
        *According to research performed by UCL{" "}
        <cite title="Source Title">UCLIC</cite> lab for X5GON
      </div>
    </div>
  );

  const P2 = () => (
    <div className="jumbotron mt-5 pt-4 py-3">
      <div className="container py-4">
        <h2>Vision</h2>

        <div className="row mx-auto">
          <div className="col-4">
            <img src={discoveryimg} alt="discovery" width={"100%"} />
          </div>
          <div className="col-8 pt-5">
            <h6>Students without access to traditional education:</h6>
            <ul className="list-group w-75 mx-auto text-primary pt-2 list-group-flush">
              <li className="list-group-item bg-light">
                Developing countries (sub saharan Africa)*
              </li>
              <li className="list-group-item bg-light">
                Socio-economic circumstances (single parents, full time
                employed…)
              </li>
              <li className="list-group-item bg-light">
                Accessibility constraints (students with disabilities)
              </li>
            </ul>
            <div className="text-muted pt-3">
              *According to <cite title="Source Title">UNESCO</cite> report for
              accessibility of education
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const P3 = () => (
    <div className="container mt-5">
      <div>
        <h3>Transparency</h3>
        <div className="mt-4">
          <img
            src={transimg}
            alt="trans"
            width="50%"
            style={{ maxWidth: "400px" }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <Layout>
      <Header />
      <P1 />
      <P2 />
      <P3 />
    </Layout>
  );
};

export default Homepage;
