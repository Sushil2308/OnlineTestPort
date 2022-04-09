import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import url from "../Token/urls";

class QuizList extends Component {
  state = {
    data: [],
    loading: true
  };
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    try {
      let response = await axios.get(
        `${url.api_url}/velocity/get_all_subjects_questions_by_users`);
      // console.log(response)
      await this.setState({ data: response.data, loading: false });
    } catch (ex) {

    }
  };

  render() {
    const { data = [], loading = true } = this.state
    return (
      <div>
        {!loading ?
          <div className="row row-cols-3">
            {data.map((temp) => (
              <div class="card col-md-3 col-sm-12 col-lg-3 m-3" key={temp}>
                <h5 className="text-center mt-2">{temp.exam_name}</h5>
                <div class="card-body d-flex justify-content-center align-items-center">

                  <Link to={`/livetest/${temp.id}`} className="btn btn-primary mt-2">
                    Attempt Now!!
                  </Link>
                </div>
              </div>
            ))}
          </div>
          : <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        }
      </div>

    );
  }
}
export default QuizList;
