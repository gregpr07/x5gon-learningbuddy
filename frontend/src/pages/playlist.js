import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  RadialChart
} from "react-vis";

const Playlist = props => {
  const id = props.match.params.id;
  const Header = () => (
    <div className="jumbotron mb-0 py-4 text-primary">
      <h1 className="display-3">Playlist {id}</h1>
      <p className="lead w-75 mx-auto">Playlist description</p>
      <div className="lead">
        <div className="btn btn-success btn" role="button">
          Take quiz
        </div>
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
    const myData = [{ angle: 1 }, { angle: 5 }];
    return (
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            {materials.map((mat, index) => Material(mat, index))}
          </div>
          <div className="col">
            <RadialChart
              data={myData}
              innerRadius={200}
              width={200}
              height={200}
            />
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
