import React, { Component } from "react";
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


              <div className="row row-cols-3 d-flex col-xl-6 col-lg-6 col-md-12 justify-content-between align-items-center mt-2">
                <div className=" col-xl-2 col-lg-2 col-md-2 text-primary">
                  <span title="Total No Of Viewd">

                    <i
                      style={{ fontSize: 40 }}
                      className="bi bi-eye-fill text-primary"
                    />

                    {tempData.viewed}
                  </span>
                </div>
                <div className=" col-xl-2 col-lg-2 col-md-3 text-success">
                  <span title="Total No Of Solved">
                    {" "}
                    <i
                      style={{ fontSize: 40 }}
                      className="bi bi-exclamation text-success"
                    />

                    {tempData.solved}
                  </span>
                </div>
                <div className=" col-xl-2 col-lg-2 col-md-3 text-warning">
                  <span title="Total Non Viewd Questions">
                  <i
                      style={{ fontSize: 40 }}
                      className="bi bi-eye-slash text-warning"
                    />

                    {tempData.nonViewed}
                  </span>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
        )}
      </div>
    );
  }
}
export default NavSection;
