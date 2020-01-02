import React from "react";
import "./people.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";

class People extends React.Component{
    state={
        PeopleList:[]
    }
    componentDidMount=()=>{
       const url_people="https://swapi.co/api/people";
       fetch(url_people, {metod:"GET"})
       .then(responce=>{
           return responce.json();
       }) 
       .then(results=>{
           this.setState({
            PeopleList: results
           });
       })
    }
    render(){
        return(
            <div className="container text-center" >
                <Header></Header>
                <People 
                PeopleArr={this.state.PeopleList}
                ></People>
                <Footer></Footer>
            </div>
        )
    }
}
export default People;