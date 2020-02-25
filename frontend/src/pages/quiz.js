import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout";

import playlistsimg from "../images/playlists.jpg";

const Homepage = props => {
  const Header = () => (
    <div className="jumbotron mb-0 text-primary">
      <h1 className="display-3">Learn faster</h1>
      <p className="lead w-75 mx-auto">
        Our AI powered software allows you to learn Open Education Materials
        with ease and connects with people with similar preferences
      </p>
      <hr className="my-4" />
      <p>
        Sample text Sample text Sample text Sample text Sample text Sample text
      </p>
      <div className="lead">
        <div className="btn btn-success btn-lg" role="button">
          Start learning
        </div>
      </div>
    </div>
  );

  const Playlists = () => {
    return (
      <div className="container mb-5">
        <img
          src={playlistsimg}
          alt="playlists"
          width="50%"
          style={{ maxWidth: "400px" }}
        />
        <h1 className="display-5">Playlists</h1>
        <div className="row mt-3">
          <div className="col">
            <div className="card text-primary" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Machine learning</h5>
                <h6 className="card-subtitle mb-2 text-muted">views: 100</h6>
                <p className="card-text">
                  This is an introductory course to machine learning, which has
                  specific best rated OERs.
                </p>
                <Link to="/" className="card-link">
                  View playlist
                </Link>
                <Link to="/" className="card-link">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Layout>
      <div
        class="alert alert-warning alert-dismissible fade show mb-0"
        role="alert"
      >
        The quiz is ready. Take the quiz
        <button
          type="button"
          class="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <Header />
      <Playlists />
    </Layout>
  );
};

export default Homepage;
