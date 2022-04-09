import React, { Component } from "react";
import questionData from '../data'
class LeftSection extends Component {
  state = {
    data: [],
    loading: true,
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData=async()=>{
      await this.setState({data:questionData.getOnlyQuestionList(),loading:false})
  }
  render() {
    const { data = [],loading=true } = this.state;
    console.log(this.state)
    return (
      <div className="col-12 ">
        {!loading ? (
          <div className="scrollbar scrollbar-primary">
         <div className="force-overflow">
            {data.map((temp, index) => (
                <>
              <div key={""+temp+index} className={this.props.questionIndex===index?"row border selQuesBack  py-2  mb-2 ml-2s mt-2 pointer":"row  py-2 quesBack mb-1 ml-1 mt-1 pointer"}
              onClick={()=>this.props.handleNext(temp.id)}
              >
                  <div className="col-2 d-flex justify-content-center  fontSizeLeft">{`Q.${index+1}`}</div>
                  <div className="col-10 d-flex justify-content-start align-items-center fontSize">{temp.question}</div>
              </div>
              
              </>
            ))}
           </div>
          </div>
          
        ) : (
          <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        )}
      </div>
    );
  }
}
export default LeftSection;
