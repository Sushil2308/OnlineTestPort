import React, { Component } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import url from "../Token/urls";
import { LoadingOutlined } from "@ant-design/icons";
import {
  message,Spin
} from "antd";
const antIcon = (
  <LoadingOutlined type="loading" style={{ fontSize: 24 }} spin />
);

class QuizList extends Component {
  state = {
    data: [],
    loading:true
  };
  componentDidMount() {
    this.getData();
  }
  getData = async () => {
    try {
      let response = await axios.get(
        `${url.api_url}/velocity/get_all_subjects_questions_by_users`);
      // console.log(response)
      await this.setState({ data: response.data,loading:false});
    } catch (ex) {
        message.error("Unable to fetch data from the database");
    }
  };

  render() {
    const{data=[],loading=true}=this.state
    return (
      <div className="jumbotrons">
        {!loading?
         <div className="row d-flex justify-content-center align-items-center">
        {data.map((temp) => (
              <div className="card col-xl-3 col-lg-3 col-md-12 m-1 bg-shadow" key={temp}>
              <h5 className="text-center">{temp.exam_name}</h5>
                <div className="card-header mt-2">{temp.subject}</div>
                <div className="card-body">
                  <h5 className="card-title">Top Mcq On {temp.subject}</h5>
                  <p className="card-text">
                    In this Quiz You Got Latest Question
                    for {temp.exam_name} and These Questions are 
                    most expected questions for {temp.exam_name} exam..
                  </p>
                  <Link to={`/liveportal/${temp.id}`} className="btn btn-primary">
                    Attempt Now!!
                  </Link>
                </div>
              </div>
        ))}
        </div>
        :<Spin anticon={antIcon}/>}
        </div>
    
    );
  }
}
export default QuizList;
