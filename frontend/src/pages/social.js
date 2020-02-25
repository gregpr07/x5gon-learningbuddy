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
            <h5 className="card-title">Notification title <button type="button" className="close" aria-label="Close"><span aria-hidden="true">&times;</span></button></h5>
            <div className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>
  );

  const Friends = () => (
      <div>
        <h4 className="display-6">Friends</h4>
        <div className="card text-primary">
          <div className="card-body">
            <h5 className="card-title">Username</h5>
          </div>
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
