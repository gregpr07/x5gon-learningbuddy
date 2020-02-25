import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/layout";

const Quiz = props => {
  const Header = () => (
    <div className="jumbotron mb-0 py-3 text-primary">
      <h1 className="display-3">Quiz</h1>
      <p className="lead w-75 mx-auto">
        Test your knowledge to see how much you've learned.
      </p>
    </div>
  );

  const Questions = () => (
    <div className="text-primary text-left container pt-3">
      <h2 className="card-title">
        Quiz &gt; Computing for Biomedical Scientists
      </h2>
      <div className="card-text">
        <form action="" method="post" noValidate>
          <input
            type="hidden"
            name="csrfmiddlewaretoken"
            defaultValue="cYrK7OKYkwfjcXuRWusPMF4t1i1K1Xi3nWVUUYBLI73ZX95QUcgztgY1UL4TFog0"
          />
          <hr />
          <h4 className="card-title">1. What are the advantages of OOP?</h4>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="1-1"
              name="1-1"
            />
            <label className="custom-control-label" htmlFor="1-1">
              Encapsulation, polymorphism, inheritance
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="1-2"
              name="1-2"
            />
            <label className="custom-control-label" htmlFor="1-2">
              Static code
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="1-3"
              name="1-3"
            />
            <label className="custom-control-label" htmlFor="1-3">
              Only encapsulation
            </label>
          </div>
          <hr />
          <h4 className="card-title">2. What is OOP?</h4>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="2-1"
              name="2-1"
            />
            <label className="custom-control-label" htmlFor="2-1">
              Computer programming is the process of designing and building an
              executable computer program for accomplishing a specific computing
              result.
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="2-2"
              name="2-2"
            />
            <label className="custom-control-label" htmlFor="2-2">
              Object-oriented programming (OOP) is a way of writing computer
              programs which is using the idea of "objects" to represent data
              and methods.
            </label>
          </div>
          <hr />
          <h4 className="card-title">3. Encapsulation is...</h4>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="3-1"
              name="3-1"
            />
            <label className="custom-control-label" htmlFor="3-1">
              method overloading
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="3-2"
              name="3-2"
            />
            <label className="custom-control-label" htmlFor="3-2">
              information hiding
            </label>
          </div>
          <div className="custom-control custom-radio">
            <input
              type="radio"
              className="custom-control-input"
              id="3-3"
              name="3-3"
            />
            <label className="custom-control-label" htmlFor="3-3">
              overlapping
            </label>
          </div>
          <hr />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <Layout>
      <Header />
      <Questions />
    </Layout>
  );
};

export default Quiz;
