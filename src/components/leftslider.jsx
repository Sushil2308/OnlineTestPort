import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class LeftSlider extends Component {
    state = {}
    render() {
        return (
        <aside id="sidebar" className="sidebar">
            <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item"><Link className="nav-link " to="/dashboard"><i className="bi bi-grid"></i><span>Dashboard</span></Link></li>
                    <li className="nav-item"><Link className="nav-link collapsed" to="/report"><i className="bi bi-person"></i><span>Report</span></Link></li>
                    <li className="nav-item"><Link to="/login" className="nav-link collapsed" ><i className="bi bi-box-arrow-in-right"></i><span>Login</span></Link></li>
                    <li className="nav-item"><Link to="/latestupdate" className="nav-link collapsed" ><i className="bi bi-question-circle"></i><span>Latest Update</span></Link></li>
                    <li className="nav-item"><Link to="/quizlist" className="nav-link collapsed" ><i className="bi bi-question-circle"></i><span>Quiz List</span></Link></li>
            </ul>
        </aside>)
    }

}
export default LeftSlider;