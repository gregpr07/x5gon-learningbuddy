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

  // TODO: improve me
  const ProfessionalPlaylist = () => {
    return (
      <div className="container my-3">
        <h4 className="display-6">Professionally created</h4>
        <div className="row mt-4">
          <div className="col-3">
            <div className="card text-primary">
              <div className="card-body">
                <h5 className="card-title">Machine learning</h5>
                <h6 className="card-subtitle mb-2 text-muted">views: 578</h6>
                <p className="card-text">
                  This is an introductory course to machine learning, which has
                  specific best rated OERs.
                </p>
                <p>
                  Created by: <strong><img src="https://github.coventry.ac.uk/avatars/u/2889?s=220" className="img-fluid" width="24" /> JohnL</strong>
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
          <div className="col-3">
            <div className="card text-primary">
              <div className="card-body">
                <h5 className="card-title">Algorithms</h5>
                <h6 className="card-subtitle mb-2 text-muted">views: 819</h6>
                <p className="card-text">
                  This is an introductory course to computer algorithms, which has
                  specific best rated OERs.
                </p>
                <p>
                  Created by: <strong><img src="https://avatars3.githubusercontent.com/u/29489921?s=400&v=4" className="img-fluid" width="24" /> Alice</strong>
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
  const TopratedPlaylists = () => {
    return (
      <div className="container my-3">
        <h4 className="display-6">Top rated</h4>
        <div className="row mt-4">
          <div className="col-3">
            <div className="card text-primary">
              <div className="card-body">
                <h5 className="card-title">Algebra</h5>
                <h6 className="card-subtitle mb-2 text-muted">views: 213</h6>
                <p className="card-text">
                  This is an introductory course to algebra, which has
                  specific best rated OERs.
                </p>
                <p>
                  Created by: <strong><img src="https://github.coventry.ac.uk/avatars/u/2889?s=220" className="img-fluid" width="24" /> JohnL</strong>
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
          <div className="col-3">
            <div className="card text-primary">
              <div className="card-body">
                <h5 className="card-title">Integrals</h5>
                <h6 className="card-subtitle mb-2 text-muted">views: 182</h6>
                <p className="card-text">
                  This is an introductory course to integrals, which has
                  specific best rated OERs.
                </p>
                <p>
                  Created by: <strong><img src="https://github.coventry.ac.uk/avatars/u/2889?s=220" className="img-fluid" width="24" /> JohnL</strong>
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
  const PopularPlaylist = () => {
    return (
      <div className="container my-3">
        <h4 className="display-6">Most popular</h4>
        <div className="row mt-4">
          <div className="col-3">
            <div className="card text-primary">
              <div className="card-body">
                <h5 className="card-title">Networking</h5>
                <h6 className="card-subtitle mb-2 text-muted">views: 2493</h6>
                <p className="card-text">
                  This is an introductory course to networking, which has
                  specific best rated OERs.
                </p>
                <p>
                  Created by: <strong><img src="https://github.coventry.ac.uk/avatars/u/2889?s=220" className="img-fluid" width="24" /> JohnL</strong>
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
          <div className="col-3">
            <div className="card text-primary">
              <div className="card-body">
                <h5 className="card-title">System administration</h5>
                <h6 className="card-subtitle mb-2 text-muted">views: 1920</h6>
                <p className="card-text">
                  This is an introductory course to system administration, which has
                  specific best rated OERs.
                </p>
                <p>
                  Created by: <strong><img src="https://avatars3.githubusercontent.com/u/29489921?s=400&v=4" className="img-fluid" width="24" /> Alice</strong>
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
                    <div className="col-3">
            <div className="card text-primary">
              <div className="card-body">
                <h5 className="card-title">Cyber security</h5>
                <h6 className="card-subtitle mb-2 text-muted">views: 1412</h6>
                <p className="card-text">
                  This is an introductory course to cyber security, which has
                  specific best rated OERs.
                </p>
                <p>
                  Created by: <strong><img src="https://avatars3.githubusercontent.com/u/29489921?s=400&v=4" className="img-fluid" width="24" /> Alice</strong>
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
        {/*{Playlistsrow("Professionally created")}*/}
        {/*{Playlistsrow("Most popular")}*/}
        {/*{Playlistsrow("Top rated")}*/}

        {ProfessionalPlaylist()}
        {PopularPlaylist()}
        {TopratedPlaylists()}
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
