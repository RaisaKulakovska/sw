import React from "react";
import "./people.css";
import Header from "../Header/header";
import Footer from "../Footer/footer";

class People extends React.Component {
    state = {
        PeopleList: []
    }
    //in item
    componentDidMount = () => {
        const url_people = "https://swapi.co/api/people";
        fetch(url_people, { metod: "GET" })
            .then(responce => {
                return responce.json();
            })
            .then(({ results }) => {
                this.setState({
                    PeopleList: results
                });
            })
    }
    render() {
        console.log(this.state.PeopleList)
        let { name, height } = this.state.PeopleList
        return (
            <div className="container text-center" >
                {name}
                {height}

            </div>
        )
    }
}

export default People;