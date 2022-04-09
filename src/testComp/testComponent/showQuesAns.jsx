import React, { Component } from "react";
import { Link } from "react-router-dom";

class ShowQuesWithAns extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="junbotrons mt-2 mb-3">
        {data.map((questData, index) => (
          <div className="row flex-column mb-2 justify-content-center align-items-center">
            <div className="row col-12 py-2 mt-2 testBack bg-shadow">
              <h5 className="row col-12 d-flex justify-content-start align-items-center fontQuesSize mt-1">{`Q.${
                index + 1
              }) ${questData.question}`}</h5>
            </div>
            <div className="mSpace"></div>
            <div className="mSpace"></div>
            <div className="row col-12 py-2 mt-1 ">
              <h5 className=" justify-content-start align-items-center fontSize">{`Choose correct answere from given options.`}</h5>
            </div>

            {questData.options.map((option, index) => (
              <div
                className="row col-12 py-2 testBack mt-1 mb-1 bg-shadow"
                key={"" + option + index}
              >
                <div className="form-check">
                  <label className="form-check-label fontSize">
                    <input
                      type="radio"
                      className="form-check-input pointer"
                      value={option}
                      name="option"
                      checked={questData.answerd === index ? true : false}
                      readOnly
                    />

                    {`${String.fromCharCode(index + 65)}. ${option}`}
                    {questData.answerd === index ? (
                      questData.options[questData.answerd] ===
                      questData.correctAnswere[0] ? (
                        <i
                        
                          className="bi bi-check2-all text-success"
                          style={{ fontSize: 24, marginLeft: 10 }}
                        ></i>
                      ) : (
                        <i
                          className="bi bi-emoji-angry text-danger"
                          style={{ fontSize: 24, marginLeft: 10 }}
                        ></i>
                      )
                    ) : (
                      ""
                    )}
                  </label>
                </div>
              </div>
            ))}

            <div
              className={
                questData.answerd >= 0
                  ? "text-primary mt-2 p-3 bg-shadow"
                  : "text-danger mt-2 p-3 bg-shadow"
              }
            >
              {questData.answerd >= 0
                ? `Correct answer Is: ${questData.correctAnswere[0]}`
                : "First Choose Your Expected Option"}
            </div>
          </div>
        ))}
        <div className="row d-flex justify-content-center align-items-center mt-2 mb-3">
         
            <button className="btn btn-success col-xl-3 col-lg-3 col-md-12"
            onClick={()=>this.props.ShowMyResults(0)}
            >
              Back To Test
            </button>
    
        </div>
        <div className="row d-flex justify-content-center align-items-center mt-2 mb-3">
         
         <button className="btn btn-success col-xl-3 col-lg-3 col-md-12"
         onClick={()=>this.props.ShowFinalResults(2)}
         >
           Submit Your Test
         </button>
 
     </div>
        <div className="row d-flex justify-content-center align-items-center mt-2 mb-3">
          <Link to="/quizlist" className=" col-xl-3 col-lg-3 col-md-12">
            <button className="btn btn-primary col-12 mb-2">
              Go Home Quiz Page
            </button>
          </Link>
        </div>
                <div className="mt-2"></div>
      </div>
    );
  }
}
export default ShowQuesWithAns;
