import React, { Component } from "react";
import NavSection from "./testComponent/navSection";
import LeftSection from "./testComponent/leftSection";
import MiddleSection from "./testComponent/middleSection";
import RightSection from "./testComponent/rightSection";
import BottomSection from "./testComponent/bottom";
import questionData from "./data";
import { LoadingOutlined } from "@ant-design/icons";
import "./app.css";
import axios from "axios";
import url from "../Token/urls";
import { message } from "antd";
import ShowQuesWithAns from "./testComponent/showQuesAns";
import { Spin, Tooltip } from "antd";
const antIcon = (
  <LoadingOutlined type="loading" style={{ fontSize: 24 }} spin />
);
class TestPortal extends Component {
  state = {
    currentIndex: 1,
    data: [],
    loading: true,
    ShowMyResultSection: false,
  };
  componentDidMount() {
    this.getData();
  }
  // fetchDataList = async () => {
  //   // console.log(questionData.getQuestionList())
  //   this.setState({ data: questionData.getQuestionList(), loading: false });
  // };
  getData = async () => {
    try {
      let response = await axios.get(
        `${url.api_url}/velocity/get_questions_by_user/${this.props.match.params.id}`
      );
      // console.log(response)
      let temp = eval(response.data.ques_list).map((question, index) => {
        return {
          id: index + 1,
          question: question.question,
          options: question.options,
          correctAnswere: [question.answer],
          answerd: -1,
          status: index === 0 ? 1 : 0,
          Clicked:0
        };
      });
      await this.setState({ data: temp, loading: false });
    } catch (ex) {
      message.error("Unable to fetch data from the database");
    }
  };
  fetchQuestionById = (index) => {
    // console.log(this.state.data[index]);
    return this.state.data[index];
  };
  handleNext = (id) => {
    // console.log(id);
    let Copy = { ...this.state };
    Copy.data[id - 1].status =
      Copy.data[id - 1].status === 0 ? 1 : Copy.data[id - 1].status;
    Copy.ShowMyResultSection = false;
    Copy.currentIndex = id;
    this.setState(Copy);
  };
  handleViewd = (id, ansId) => {
    // console.log(id);
    let Copy = { ...this.state };
    Copy.data[id - 1].status = 2;
    Copy.data[id - 1].Clicked = 1;
    Copy.data[id - 1].answerd = ansId;
    Copy.currentIndex = id;
    this.setState(Copy);
  };
  fetchQuestion = () => {
    return this.state.data.map((temp) => ({
      id: temp.id,
      status: temp.status,
    }));
  };
  SumOfClicks=()=>this.state.data.reduce((sum,temp)=>sum+temp.Clicked,0)
  
  fetchViewdNonViewd = () => {
    const tempData = { viewed: 0, nonViewed: 0, solved: 0 };
    this.state.data.map((temp) => {
      if (temp.status === 0) {
        tempData.nonViewed++;
      } else if (temp.status === 1) {
        tempData.viewed++;
      } else {
        tempData.solved++;
      }
    });
    // console.log(tempData)
    return tempData;
  };
  ShowMyResults = (value) => {
    // console.log("Wait")
    this.setState({ ShowMyResultSection: value });
  };
  render() {
    const {
      currentIndex = 1,
      loading = true,
      ShowMyResultSection = false,
      data = [],
    } = this.state;
    // console.log(this.state);
    return (
      <div className="container-fluid testBack fix-height ">
        {!loading ? (
          <>
            {!ShowMyResultSection ? (
              <>
                <div className=" col-xl-12 col-lg-12 col-md-12  testBack nav-height">
                  <NavSection
                    fetchViewdNonViewd={this.fetchViewdNonViewd()}

                  />
                </div>
                <div className="row mt-4">
                  {/* <div className="col-xl-3 col-lg-3 col-md-12 testBack">
            <LeftSection
              handleNext={this.handleNext}
              questionIndex={currentIndex - 1}
            />
          </div> */}
                  <div className="col-xl-9 col-xl-9 col-md-12 testMainBack bg-shadow">
                    <MiddleSection
                      question={this.fetchQuestionById(currentIndex - 1)}
                      questionIndex={currentIndex - 1}
                      handleNext={this.handleNext}
                      ShowMyResultSection={ShowMyResultSection}
                      lastIndex={this.state.data.length}
                      handleViewd={this.handleViewd}
                    />
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-12 testBack">
                    <RightSection
                      questionIndex={currentIndex - 1}
                      handleNext={this.handleNext}
                      questionList={this.fetchQuestion()}
                    />
                  </div>
                </div>
                <div className="row col-12 d-flex justify-content-center align-items-center text-danger mt-2 bt-3">
                  {this.SumOfClicks() === data.length ? (
                    <button
                      className="btn btn-warning col-xl-3 col-lg-3 col-md-12"
                      onClick={() => this.ShowMyResults(true)}
                    >
                      <Tooltip title="Sure!! You want to submit to test!">
                        Check Answers!!{" "}
                      </Tooltip>
                    </button>
                  ) : (
                    ""
                  )}
                </div>
              </>
            ) : (
              <ShowQuesWithAns data={data} />
            )}
          </>
        ) : (
          <Spin anticon={antIcon} />
        )}
      </div>
    );
  }
}
export default TestPortal;
