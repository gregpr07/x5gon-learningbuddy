import React, { useState, useEffect } from "react";

import { Layout } from "../components/layout";

const Profile = props => {
  const [userData, setUserData] = useState();
  useEffect(() => {
    fetch("/users/data/")
      .then(res => {
        if (res.status === 200) {
          return res.json();
        } else console.log("waw");
      })
      .then(json => setUserData(json));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!userData) {
    return <div className="text-center mt-3">You are logged out</div>;
  } else {
    return (
      <Layout>
        <div className="jumbotron bg-dark">
          <div className="row">
            <div className="col-12 col-md-3">
              <div className="card">
                <div className="card-body">
                  <img src="" className="img-fluid" alt="Avatar" />
                  <h2 className="text-center">{userData.username}</h2>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-9">
              <div className="card">
                <div className="card-body text-primary">
                  <h4 className="card-title">Description</h4>
                  <div className="card-text">
                    {userData.profile.description}
                  </div>
                </div>
              </div>
              <div className="card text-primary">
                <div className="card-body">
                  <h4 className="card-title">Statistics</h4>
                  <div className="card-text">
                    <table className="table table-striped">
                      <tbody>
                        <tr>
                          <th>Documents read</th>
                          <td>{userData.stats.resources_read}</td>
                        </tr>
                        <tr>
                          <th>Documents rated</th>
                          <td>{userData.stats.quizzes_played}</td>
                        </tr>
                        <tr>
                          <th>Quizzes played</th>
                          <td>{userData.stats.quizzes_rated}</td>
                        </tr>
                        <tr>
                          <th>Points</th>
                          <td>{userData.stats.rating}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
};

export default Profile;
