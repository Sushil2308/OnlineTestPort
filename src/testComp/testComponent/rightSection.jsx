import React ,{Component} from 'react';
import questionData from '../data'

class RightSection extends Component{
    state = {
        data: [],
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
      fetchData=async()=>{
          await this.setState({data:this.props.questionList,loading:false})
      }
    render(){
        const { data = [],loading=true } = this.state;
       return( 
        <div className="jumbotrons m-1">
        {!loading ? (
         <div className="scrollbar scrollbar-primary w-100">
         <div className="force-overflow">
         
           <div className="row row-cols-2 m-auto row justify-content-center align-items-center bg-shadow">
            {data.map((temp, index) => (
              <div key={""+temp+index+1} onClick={()=>this.props.handleNext(temp.id)} className={temp.status===0?"bg-shadow col-2 rounded-circle bg-warning py-2 quesBack m-3 row justify-content-center align-items-center text-white fontSize pointer":temp.status===1?"bg-shadow col-2 bg-primary py-2 rounded-circle quesBack m-3 row justify-content-center align-items-center text-white fontSize pointer":"bg-shadow col-2 bg-success rounded-circle py-2 quesBack m-3 row justify-content-center align-items-center text-white fontSize pointer"}>
                  <span title={temp.status===0?"Question Is Not Viewd":temp.status===1?"Question Is Already Viewd But Not Solved":"Question Is Solved"}><h5 className="row  justify-content-center align-items-center">{`Q.${index+1}`}</h5></span>
              </div>
            ))}
            </div>
            </div>
           
           </div>
        ) : (
          <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        )}
      </div>
        )
    }
}
export default RightSection;