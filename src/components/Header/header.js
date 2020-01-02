import React from "react";
import "./header.css";
import {Fragment} from 'react';
class Header extends React.Component{
    render(){
        return(
            <Fragment>
            <h1 className="sw_title">Star Wars</h1>
            <h3 className="sw_subtitle">guide</h3>
            </Fragment>
        )
    }
}
export default Header;