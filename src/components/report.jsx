import React, { Component } from 'react'


class Report extends Component {
    state = {}
    render() {
        return (
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Report</li>
                        </ol>
                    </nav>
                </div>

                <section className="section dashboard">
                    <h5>Report</h5>
                </section>

            </main>
        )
    }

}
export default Report;