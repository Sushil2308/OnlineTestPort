import React, { Component } from "react";
import NavSection from "./testComponent/navSection";
import LeftSection from "./testComponent/leftSection";
import MiddleSection from "./testComponent/middleSection";
import RightSection from "./testComponent/rightSection";
import BottomSection from "./testComponent/bottom";
import questionData from "./data";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import "./app.css"
const antIcon = (
  <LoadingOutlined type="loading" style={{ fontSize: 24 }} spin />
);
class TestPortal extends Component {
  state = {
    currentIndex: 1,
    data: [],
    loading: true,
  };
  componentDidMount() {
    this.fetchDataList();
  }
  fetchDataList = async () => {
    this.setState({ data: questionData.getQuestionList(), loading: false });
  };
  fetchQuestionById = (index) => {
    console.log(this.state.data[index]);
    return this.state.data[index];
  };
  handleNext = (id) => {
    console.log(id);
    let Copy = { ...this.state };
    Copy.data[id-1].status =Copy.data[id-1].status===0?1:Copy.data[id-1].status;
    Copy.currentIndex = id;
    this.setState(Copy);
  };
  handleViewd=(id,ansId)=>{
    console.log(id);
    let Copy = { ...this.state };
    Copy.data[id-1].status = 2;
    Copy.data[id-1].answerd = ansId;
    Copy.currentIndex = id;
    this.setState(Copy);
  }
  fetchQuestion=()=>{
    return this.state.data.map(temp=>(
      {id:temp.id,status:temp.status}
    ))
  }
  fetchViewdNonViewd=()=>{
  const tempData={viewed:0,nonViewed:0,solved:0}
   this.state.data.map(temp=>{
    if(temp.status===0){
      tempData.nonViewed++
    }else if(temp.status===1){
      tempData.viewed++
    }else{
      tempData.solved++
    }
  })
  console.log(tempData)
  return tempData
  }
  render() {
    const { currentIndex = 1, loading = true } = this.state;
    console.log(this.state);
    return (
      <div className="container-fluid testBack fix-height ">
        {!loading ? (
          <>
            <div className=" col-xl-12 col-lg-12 col-md-12  testBack nav-height">
              <NavSection fetchViewdNonViewd={this.fetchViewdNonViewd()}/>
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
           
          </>
        ) : (
          <Spin indicator={antIcon} />
        )}
      </div>
    );
  }
}
export default TestPortal;
