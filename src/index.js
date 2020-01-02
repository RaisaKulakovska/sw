import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Fragment} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from "./components/Header/header";
import Home from "./components/Home/home";
import People from "./components/People/people";
import Planets from "./components/Planets/planets";
import Films from "./components/Films/films";
import Footer from "./components/Footer/footer";
import NotFound from "./components/NotFound/notFound";

class App extends React.Component{
    /* state={
        loading: true,
        person: []
    }
    componentDidMount=()=>{
        const url_swapi="https://swapi.co/api/people";
        fetch(url_swapi, {method: "GET"})
        .then(responce=>{
            return responce.json();
        })
        .then(data=>{
            this.setState({
                person:data,
                loading:false
            });
        })
      .catch(err=>console.log(err));  
            
    } */
   render(){
    //console.log(this.state.person);
       return(
           <Router>
           <div className="container cont_app">
               <Header></Header>
                <Home></Home>
                  <Switch>
                      <Route path="/people" exact component={People}></Route>
                      <Route path="/planets" exact component={Planets}></Route>
                      <Route path="/films" exact component={Films}></Route>
                      <Route path="/" exact component={Home}></Route>
                      <Route path="*" exact component={NotFound}></Route>
                  </Switch>                
               <Footer></Footer>
               
           </div>
           </Router>
       )
   }
   
}
ReactDOM.render(<App/>, document.getElementById("root"))