import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout";
import { PieChart, Pie, Sector, Cell } from "recharts";

const Playlist = props => {
  const id = props.match.params.id;
  const Header = () => (
    <div className="jumbotron mb-0 py-4 text-primary">
      <h1 className="display-3">Playlist {id}</h1>
      <p className="lead w-75 mx-auto">Playlist description</p>
      <div className="lead">
        <Link to={"/quiz/" + id} className="btn btn-success btn" role="button">
          Take quiz
        </Link>
      </div>
    </div>
  );

  const Material = (material, index) => {
    return (
      <div
        className={
          "card mb-4 text-primary mx-auto" +
          (index === 0 ? " border-success" : "")
        }
        style={{ maxWidth: "250px" }}
      >
        <div className="card-header">
          {index === 0 ? "Current material" : "Next material"}
        </div>
        <div className="card-body">
          <h6>{material.title}</h6>
          <p
            className="card-text text-muted mb-2 mx-auto"
            style={{ maxWidth: "200px" }}
          >
            {material.description}
          </p>

          <span>{material.repository}</span>
        </div>
      </div>
    );
  };
  const materials = [
    {
      title: "Title",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      repository: "MIT Open Courseware"
    },
    {
      title: "Title",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
      repository: "MIT Open Courseware"
    }
  ];
  const Data = () => {
    const data = [
      {
        name: "Group A",
        value: 60,
        label: "Completed"
      },
      {
        name: "Group B",
        value: 40
      }
    ];
    const COLORS = ["#0088FE", "#00C49F"];
    return (
      <div className="container py-4 text-primary">
        <div className="row">
          <div className="col-md-4">
            {materials.map((mat, index) => Material(mat, index))}
          </div>
          <div className="col-6">
            <div>
              <p className="p-0">Completed 60% of course</p>
              <PieChart width={160} height={160} className="mx-auto">
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                >
                  {" "}
                  {data.map((entry, index) => (
                    <Cell fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </div>
            <div className="row mt-5">
              <div className="col-6">
                <ul class="list-group">
                  <h6 className="text-danger" style={{ height: "30px" }}>
                    People with similar preferences
                  </h6>
                  <li class="list-group-item">Cras justo odio</li>
                  <li class="list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item">Morbi leo risus</li>
                  <li class="list-group-item">Porta ac consectetur ac</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
              <div className="col-6">
                <ul class="list-group">
                  <h6 className="text-danger" style={{ height: "30px" }}>
                    Scoreboard
                  </h6>
                  <li class="list-group-item">Cras justo odio</li>
                  <li class="list-group-item">Dapibus ac facilisis in</li>
                  <li class="list-group-item">Morbi leo risus</li>
                  <li class="list-group-item">Porta ac consectetur ac</li>
                  <li class="list-group-item">Vestibulum at eros</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <Header />
      <Data />
    </Layout>
  );
};

export default Playlist;
