import React, { Component } from "react";
import certificate from "../../onlineTest/images/certificate.png";
class ShowReportCard extends Component {
  render() {
      const {total=0,solved=0}=this.props.data
      const correct=this.props.correct
    return (
      <div className="jumbotrons ">
        <div className="row d-flex justify-content-center align-items-center flex-column">
          <div className="row col-xl-4 col-lg-4 col-md-12 mt-3">
            <img src={certificate} className="img-fluid" />
          </div>
        
            <div className="row col-12 d-flex justify-content-center align-items-center mt-3 bg-dark p-3">
              <div className="row col-6 d-flex justify-content-center align-items-center">
              <h6 className="col-6 text-end text-white fontSizeMini">Total Questions:</h6>
              <h6 className="col-6 text-left text-white fontSizeMini">{total}</h6>
              </div>
              <div className="row col-6 d-flex justify-content-center align-items-center">
              <h6 className="col-6 text-end text-success fontSizeMini">Total Correct:</h6>
              <h6 className="col-6 text-left text-success fontSizeMini">{correct}</h6>
              </div>
              
            </div>
            <div className="row col-12 d-flex justify-content-center align-items-center bg-dark p-3">
            <div className="row col-6 d-flex justify-content-center align-items-center">
              <h6 className="col-6 text-end text-primary fontSizeMini">Total Attempts:</h6>
              <h6 className="col-6 text-left text-primary fontSizeMini">{solved}</h6>
              </div>
              <div className="row col-6 d-flex justify-content-center align-items-center">
              <h6 className="col-6 text-end text-danger fontSizeMini">Total Wrong:</h6>
              <h6 className="col-6 text-left text-danger fontSizeMini">{total-correct}</h6>
              </div>
            </div>
            
          </div>
      </div>
    );
  }
}
export default ShowReportCard;
