import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout";

const Playlists = props => {
  const Header = () => (
    <div className="jumbotron mb-0 text-primary">
      <h1 className="display-3">Playlists</h1>
      <p className="lead w-75 mx-auto">Personalized playlists </p>
    </div>
  );

  const Playlistsrow = title => {
    return (
      <div className="container my-3">
        <h4 className="display-6">{title}</h4>
        <div className="row mt-4">
          <div className="col">
            <div className="card text-primary" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">Machine learning</h5>
                <h6 className="card-subtitle mb-2 text-muted">views: 100</h6>
                <p className="card-text">
                  This is an introductory course to machine learning, which has
                  specific best rated OERs.
                </p>
                <p>
                  Created by: <strong>JohnL</strong>
                </p>
                <Link to="/playlist/1" className="card-link">
                  View playlist
                </Link>
                <Link to="/playlist/1" className="card-link">
                  Read more
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-4" />
      </div>
    );
  };
  const Playlists = () => {
    return (
      <div className="pt-3">
        {Playlistsrow("Professionally created")}
        {Playlistsrow("Most popular")}
        {Playlistsrow("Top rated")}
      </div>
    );
  };
  return (
    <Layout>
      <Header />
      <Playlists />
    </Layout>
  );
};

export default Playlists;
