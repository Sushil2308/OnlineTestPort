import React, { Component } from "react";
import { Spin, Tooltip } from "antd";
import {
  LoadingOutlined,
  EyeFilled,
  EyeInvisibleFilled,
  LikeFilled,
} from "@ant-design/icons";
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
  componentDidUpdate(preProps, preState) {
    if (this.props !== preProps) {
      this.fetchData();
    }
  }
  fetchData = async () => {
    this.setState({ tempData: this.props.fetchViewdNonViewd, loading: false });
  };
  render() {
    const { tempData, loading = true } = this.state;
    return (
      <div className="jumbotrons">
        {!loading ? (
          <>
            <div className="row fontSizeBold">
              <div className="text-center text-dark">Exam Name</div>

              <div className="row row-cols-3 d-flex col-xl-6 col-lg-6 col-md-12 justify-content-between align-items-center mt-2">
                <div className=" col-xl-2 col-lg-2 col-md-2 text-primary">
                  <span title="Total No Of Viewd">
                    <Tooltip title="Question Is Already Viewd But Not Solved">
                      <EyeFilled
                        style={{ fontSize: 40 }}
                        className="text-primary"
                      />
                    </Tooltip>
                    {tempData.viewed}
                  </span>
                </div>
                <div className=" col-xl-2 col-lg-2 col-md-3 text-success">
                  <span title="Total No Of Solved">
                    {" "}
                    <Tooltip title="Answer Is Already Submitted">
                      <LikeFilled
                        style={{ fontSize: 40 }}
                        className="text-success"
                      />
                    </Tooltip>{" "}
                    {tempData.solved}
                  </span>
                </div>
                <div className=" col-xl-2 col-lg-2 col-md-3 text-warning">
                  <span title="Total Non Viewd Questions">
                    <Tooltip title="Question Is Not Viewd">
                      <EyeInvisibleFilled
                        style={{ fontSize: 40 }}
                        className="text-warning"
                      />
                    </Tooltip>{" "}
                    {tempData.nonViewed}
                  </span>
                </div>
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
