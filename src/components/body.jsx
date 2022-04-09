import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './dashboard';
import ExamListPage from './examlist';
import QuizListPage from './quizlistpage';
import Login from '../onlineTest/login'
import TestPortal from '../testComp/mainComp'
import Notification from './notification';
import Report from './report';
class Content extends Component {
    state = {}
    render() {
        return (
            <Switch>
                <Route exact path="/quizlist">
                    <QuizListPage />
                </Route>
                <Route exact path="/examlist">
                    <ExamListPage />
                </Route>
                <Route exact path="/dashboard">
                    <Dashboard />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/livetest/:id">
                    <TestPortal />
                </Route>
                <Route exact path="/latestupdate">
                    <Notification />
                </Route>
                <Route exact path="/report">
                    <Report />
                </Route>
            </Switch>
        )
    }

}
export default Content;