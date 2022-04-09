import React, { Component } from "react";
class MiddleSection extends Component {
  state = {
    data: {},
    index: 0,
    lastIndex: -1,
    loading: true,

  };
  componentDidMount() {
    this.mapData();
  }
  componentDidUpdate(preProps, preState) {
    if (this.props !== preProps) {
      this.mapData();
    }
  }
  mapData = async () => {
    const { id = "", question = "", options = "", status = 0, answerd = -1, correctAnswere = "" } = this.props.question;
    const tempData = { id: id, question: question, options: eval(options), status: status, answerd: answerd, correctAnswere: correctAnswere };
    this.setState({
      data: tempData,
      index: this.props.questionIndex,
      lastIndex: this.props.lastIndex,
      loading: false,
    });
  };
  render() {
    const { data = {}, index = 0, loading = true, lastIndex = 0, } = this.state;
    // console.log(this.state);
    return (
      <div className="p-1">
        {!loading ? (
          <>
            <div className="row flex-column mb-2 justify-content-center align-items-center">
              <div className="row col-12 py-2 mt-2 testBack bg-shadow">
                <div className="row col-12 d-flex justify-content-start align-items-center fontQuesSize mt-1">{`Q.${index + 1
                  }) ${data.question}`}</div>
              </div>
              <div className="mSpace"></div>
              <div className="row col-12 d-flex justify-content-start align-items-center">
                <div>
                  {data.status === 0 ? (

                    <i
                      style={{ fontSize: 40 }}
                      className="bi bi-eye-slash text-warning"
                    ><span title="Questions Viewd" /></i>


                  ) : data.status === 1 ? (

                    <i
                      style={{ fontSize: 40 }}
                      className="bi bi-eye-fill text-primary"
                    ><span title="Questions Viewd But Not Mark" /></i>
                  ) : (
                    <i
                      style={{ fontSize: 40 }}
                      className="bi bi-exclamation text-success"
                    ><span title="Marked, But I don't know it's correct" /></i>
                  )}
                </div>
              </div>
              <div className="mSpace"></div>
              <div className="row col-12 py-2 mt-1 ">
                <h5 className=" justify-content-start align-items-center fontSize">{`Choose correct answere from given options.`}</h5>
              </div>

              {data.options.map((option, index) => (
                <div className="row col-12 py-2 testBack mt-1 mb-1 bg-shadow" key={"" + option + index}>
                  <div className="form-check">
                    <label className="form-check-label fontSize">
                      {data.answerd === index ?

                        <input
                          type="radio"
                          className="form-check-input pointer"
                          value={option}
                          name="option"
                          checked
                          onClick={() => this.props.handleViewd(data.id, index)}
                        />
                        : <input
                          type="radio"
                          className="form-check-input pointer"
                          value={option}
                          name="option"

                          onClick={() => this.props.handleViewd(data.id, index)}
                        />}

                      {`${String.fromCharCode(index + 65)}. ${option}`}
                    </label>
                  </div>
                </div>
              ))}
              {this.props.ShowMyResultSection ? <div className={data.answerd >= 0 ? data.options[data.answerd] === data.correctAnswere[0] ? "text-primary mt-2 p-3 bg-shadow" : "text-warning mt-2 p-3 bg-shadow" : "text-danger mt-2 p-3 bg-shadow"}>{data.answerd >= 0 ? `Your Answer Was: ${data.options[data.answerd]}.The Correct Is :${data.correctAnswere}` : "First Choose Your Expected Option"}</div> : ""}
            </div>
            <div className="row d-flex justify-content-between align-items-center mt-1 mb-2">
              <button disabled={index > 0 ? false : true} className="btn col-1 border-none btn-outline-primary p-2"
                onClick={() => this.props.handleNext(data.id - 1)}
              > <i
                  style={{ fontSize: 18 }}
                  className="bi bi-chevron-double-left text-dark"
                /></button>

              <button disabled={index < lastIndex - 1 ? false : true} className="btn border-none col-1 btn-outline-success p-2"
                onClick={() => this.props.handleNext(data.id + 1)}
              ><i
                  style={{ fontSize: 18 }}
                  className="bi bi-chevron-double-right text-dark"
                /></button>
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
export default MiddleSection;
