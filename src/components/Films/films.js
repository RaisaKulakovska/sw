import React from "react";
import "./films.css";
import {Fragment} from 'react';
import "../Header/header";
import "../Footer/footer"

class Films extends React.Component{
    
    render(){
        return(
            <Fragment>
                {/* <Header></Header> */}
                <h1>Films</h1>
                {/* <Footer></Footer> */}
            </Fragment>
        )
    }
}
export default Films;