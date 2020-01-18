import React from "react";
import {Fragment} from 'react';
import "./home.css";
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

class Home extends React.Component{
    
    render(){
        return(
            <Fragment>
            <div className="cont_main row my-5">
                <div className="col text-center mb-3">
                    <div className="card1 ">
                        <Link to="/People">
                        <img src="https://starwars-visualguide.com/assets/img/characters/85.jpg" alt=""/>
                        <h3 className="card1_subtitle">People</h3>
                        </Link>
                    </div>                    
                </div>
                <div className="col text-center mb-3">
                    <div className="card1 ">
                        <Link to="/Planets">
                        <img src="https://starwars-visualguide.com/assets/img/planets/5.jpg" alt=""/>
                        <h3 className="card1_subtitle">Planets</h3>
                        </Link>
                    </div>                    
                </div>
                <div className="col text-center mb-3">
                    <div className="card1 ">
                    <Link to="/Films">
                        <img src="https://starwars-visualguide.com/assets/img/films/6.jpg" alt=""/>
                        <h3 className="card1_subtitle">Films</h3>
                    </Link>
                    </div>                    
                </div>
            </div>
            </Fragment>
        )
    }
}
export default Home;