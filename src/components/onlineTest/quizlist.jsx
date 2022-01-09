import React, { Component } from "react";
import "./styles.css";
import data from "../testComp/data";
import { Link } from "react-router-dom";

class QuizList extends Component {
  state = {
    data: [],
  };
  componentDidMount() {
    this.fetchDataList();
  }
  fetchDataList = async () => {
    this.setState({ data: data.getQuizList(), loading: false });
  };

  render() {
    console.log(this.state);
    return (
      <div className="jumbotrons">
        {this.state.data.map((temp, index) => (
          <>
          <h5>{temp.exam}</h5>
          <div className="row d-flex justify-content-center align-items-center">
            {temp.subjects.map((sub) => (
              <div class="card col-xl-3 col-lg-3 col-md-12 m-2 bg-shadow">
                <div class="card-header mt-1">{sub}</div>
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            ))}
          </div>
          </>
        ))}
      </div>
    );
  }
}
export default QuizList;
