import React, { Component } from 'react'


class Notification extends Component {
    state = {}
    render() {
        return (
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Dashboard</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item active">Latest Notification</li>
                        </ol>
                    </nav>
                </div>

                <section className="section dashboard">
                    <h5>Latest Notification</h5>
                </section>

            </main>
        )
    }

}
export default Notification;