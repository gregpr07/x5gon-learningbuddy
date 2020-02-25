import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout";

const Social = props => {
  const Header = () => (
    <div className="jumbotron mb-0 text-primary">
      <h1 className="display-3">Social</h1>
      <p className="lead w-75 mx-auto">Notifications, friends, messages & more!</p>
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

  const Messages = () => (
      <div>
        <h4 className="display-6">Messages</h4>
        <div className="card text-primary">
          <div className="card-body">
            <div className="card-text">
                <p>Heeey Mike! Do you wanna study with me today at 6pm?</p>
                <p><img src="https://avatars3.githubusercontent.com/u/29489921?s=400&v=4" className="img-fluid" width="24" /> Alice <small>(24/02/2020 4:36pm)</small></p>
                <Link to="/playlist/1" className="card-link">
                  Reply
                </Link>
            </div>
          </div>
        </div>
      </div>
  );

  const Friend = (friend, index) => {
    return (
      <div className="card text-primary mt-2">
          <div className="card-body">
            <h5 className="card-text"><img src={friend.image_url} className="img-fluid" width="24" /> {friend.username}</h5>
          </div>
      </div>
    );
  };

  const friends = [
    {
      username: "duppy_",
      image_url: "https://avatars1.githubusercontent.com/u/6363106?s=460&v=4",
    },
    {
      username: "Sam",
      image_url: "https://avatars1.githubusercontent.com/u/5435082?s=400&v=4",
    },
    {
      username: "Alice",
      image_url: "https://avatars3.githubusercontent.com/u/29489921?s=400&v=4",
    },
    {
      username: "Kathy142",
      image_url: "https://avatars-04.gitter.im/group/iv/3/57542c58c43b8c60197724d9",
    },
  ];

  const Friends = () => (
      <div>
        <h4 className="display-6">Friends [16]</h4>
          {friends.map((friend, index) => Friend(friend, index))}
        <ul className="pagination pagination-sm mt-2 justify-content-center">
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
