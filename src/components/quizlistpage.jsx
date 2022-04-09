import React, { Component } from 'react'
import QuizList from '../onlineTest/quizlist';
class QuizListPage extends Component {
    state = {}
    render() {
        return (
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                            <li className="breadcrumb-item active">QuizList</li>
                        </ol>
                    </nav>
                </div>
                <section className="section dashboard">
                        <QuizList/>
                </section>

            </main>
        )
    }

}
export default QuizListPage;


