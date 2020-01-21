import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import People from "./components/People/people";
import Planets from "./components/Planets/planets";
import Films from "./components/Films/films";
import Footer from "./components/Footer/footer";
import NotFound from "./components/NotFound/notFound";

class App extends React.Component {
    state = {        
        person: []
    }
        render() {
       
        return (
            <Router>
                <div className="container cont_app">
                    <Header></Header>
                    <Switch>
                        <Route path="/" exact component={Home}></Route>
                        <Route path="/people" exact component={People}></Route>
                        <Route path="/planets" exact component={Planets}></Route>
                        <Route path="/films" exact component={Films}></Route>
                        <Route path="*" exact component={NotFound}></Route>
                    </Switch>
                    <Footer></Footer>

                </div>
            </Router>
        )
    }

}
ReactDOM.render(<App />, document.getElementById("root"))