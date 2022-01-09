import React, { Component } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin, Tooltip } from "antd";
const antIcon = (
  <LoadingOutlined type="loading" style={{ fontSize: 24 }} spin />
);
class NavSection extends Component {
  state = {
    tempData: {},
    loading: true,
  };
  componentDidMount() {
    this.fetchData();
  }
  componentDidUpdate(preProps,preState){
      if(this.props!==preProps){
        this.fetchData();
      }
  
  }
  fetchData = async () => {
    this.setState({ tempData: this.props.fetchViewdNonViewd, loading: false });
  };
  render() {
    const { tempData,loading=true } = this.state;
    console.log(this.state)
    return (
      <div className="container-fluid ">
        {!loading ? (
          <>
            <div className="row  fontSizeBold  ">
              <div className="text-center text-dark">Exam Name</div>
              
              <div className="row col-12 d-flex flex-column">
               
                  <div className="col-xl-4 col-lg-4 col-md-12 text-danger">Total Time</div>
              
                  <div className="row d-flex col-12 justify-content-between align-items-center">
                  <div className=" col-3 text-primary"><span title="Total No Of Viewd">Viewd: {tempData.viewed}</span></div>
                  <div className=" col-4 text-success"><span title="Total No Of Solved">Solved: {tempData.solved}</span></div>
                  <div className=" col-5 text-warning"><span title="Total Non Viewd Questions">Not Viewd: {tempData.nonViewed}</span></div>
                  </div>:
              </div>
            </div>
          </>
        ) : (
          <Spin antIcon={antIcon} />
        )}
      </div>
    );
  }
}
export default NavSection;
