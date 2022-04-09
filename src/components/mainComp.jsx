import React, { Component } from 'react'
import Content from './body'
import Footer from './footer'
import Header from './header'
import LeftSlider from './leftslider'
class MainComponnet extends Component {
    render() {
        return (<>
            <Header />
            <LeftSlider />
            <Content/>
            <Footer />
        </>)
    }
}
export default MainComponnet