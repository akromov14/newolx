import "./Container.css";
import Header from "../Header"
import Footer from "../Footer"
import React from 'react'
import Inputs from './../../pages/Home/Inputs'

const Container = (props) => {
    return (
        <>
            <Header />
           <div className="container">
           <Inputs/>
           </div>
            <div className="content">
                {props.children}
            </div>
            <Footer />
        </>
    )
}

export default Container