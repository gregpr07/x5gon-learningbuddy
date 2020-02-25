import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout";

const Social = props => {
  const Header = () => (
    <div className="jumbotron mb-0 text-primary">
      <h1 className="display-3">Social</h1>
      <p className="lead w-75 mx-auto">Lorem ipsum dolor sit amet.</p>
    </div>
  );

  const Notifications = () => (
      <div>
        <h4 className="display-6">Notifications</h4>
        <div className="card text-primary">
          <div className="card-body">
            <h5 className="card-title">Challenge <button type="button" className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></h5>
            <div className="card-text">
                <img src="https://avatars3.githubusercontent.com/u/29489921?s=400&v=4" className="img-fluid" width="24" /> Mike14 just challenged you in Machine Learning Playlist.
                <br/>
                <small className="text-left">(25/02/2020 6:04pm)</small>
            </div>
          </div>
        </div>
          <div className="card text-primary mt-2">
          <div className="card-body">
            <h5 className="card-title">Like <button type="button" className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></h5>
            <div className="card-text">
                <img src="https://avatars0.githubusercontent.com/u/32172990?s=400&v=4" className="img-fluid" width="24" /> Jessica liked your playlist.
                <br/>
                <small className="text-left">(24/02/2020 4:36pm)</small>
            </div>
          </div>
        </div>
      </div>
  );

  const Friends = () => (
      <div>
        <h4 className="display-6">Friends [16]</h4>
        <div className="card text-primary">
          <div className="card-body">
            <h5 className="card-text"><img src="https://avatars1.githubusercontent.com/u/6363106?s=460&v=4" className="img-fluid" width="24" /> duppy_</h5>
          </div>
        </div>
        <div className="card text-primary mt-2">
          <div className="card-body">
            <h5 className="card-text"><img src="https://avatars3.githubusercontent.com/u/29489921?s=400&v=4" className="img-fluid" width="24" /> Username</h5>
          </div>
        </div>
        <div className="card text-primary mt-2">
          <div className="card-body">
            <h5 className="card-text"><img src="https://avatars3.githubusercontent.com/u/29489921?s=400&v=4" className="img-fluid" width="24" /> Username</h5>
          </div>
        </div>
          <div className="text-lg-center">
        <ul className="pagination pagination-sm mt-2">
          <li className="page-item disabled">
            <a className="page-link" href="#">«</a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">1</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">2</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">3</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">4</a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">»</a>
          </li>
        </ul>
      </div>
      </div>
  );

  const Messages = () => (
      <div>
        <h4 className="display-6">Messages</h4>
        <div className="card text-primary">
          <div className="card-body">
            <h5 className="card-title">Notification title</h5>
            <div className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>
  );

  return (
    <Layout>
          <Header/>
          <div className="container my-3">
            <div className="row">
                <div className="col-4 pt-3">
                  <Notifications/>
                </div>
                <div className="col-4 pt-3">
                  <Friends/>
                </div>
                <div className="col-4 pt-3">
                  <Messages/>
                </div>
          </div>
          </div>
    </Layout>
  );
};

export default Social;
