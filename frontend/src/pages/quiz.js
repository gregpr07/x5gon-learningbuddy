import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout";

const Quiz = props => {
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

  const Questions = () => (
      <div className="card text-primary text-left">
        <div className="card-body">
          <h2 className="card-title">Quiz &gt; Computing for Biomedical Scientists</h2>
          <div className="card-text">
            <p>Test your knowledge to see how much you've remembered.</p>
            <form action="" method="post" noValidate>
              <input type="hidden" name="csrfmiddlewaretoken" defaultValue="cYrK7OKYkwfjcXuRWusPMF4t1i1K1Xi3nWVUUYBLI73ZX95QUcgztgY1UL4TFog0" />
              <hr />
              <h4 className="card-title">1. What are the advantages of OOP?</h4>
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id="1-1" name="1-1" />
                <label className="custom-control-label" htmlFor="1-1">Encapsulation, polymorphism, inheritance</label>
              </div>
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id="1-2" name="1-2" />
                <label className="custom-control-label" htmlFor="1-2">Static code</label>
              </div>
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id="1-3" name="1-3" />
                <label className="custom-control-label" htmlFor="1-3">Only encapsulation</label>
              </div>
              <hr />
              <h4 className="card-title">2. What is OOP?</h4>
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id="2-1" name="2-1" />
                <label className="custom-control-label" htmlFor="2-1">Computer programming is the process of designing and building an executable computer program for accomplishing a specific computing result.</label>
              </div>
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id="2-2" name="2-2" />
                <label className="custom-control-label" htmlFor="2-2">Object-oriented programming (OOP) is a way of writing computer programs which is using the idea of "objects" to represent data and methods.</label>
              </div>
              <hr />
              <h4 className="card-title">3. Encapsulation is...</h4>
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id="3-1" name="3-1" />
                <label className="custom-control-label" htmlFor="3-1">method overloading</label>
              </div>
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id="3-2" name="3-2" />
                <label className="custom-control-label" htmlFor="3-2">information hiding</label>
              </div>
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" id="3-3" name="3-3" />
                <label className="custom-control-label" htmlFor="3-3">overlapping</label>
              </div>
              <hr />
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
  );

  return (
    <Layout>
        <Questions />
    </Layout>
  );
};

export default Quiz;
