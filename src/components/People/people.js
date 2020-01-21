import React, { Fragment } from "react";
import "./people.css";
import PeopleItem from "./PeopleList/PeopleItem/peopleItem"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* class People extends React.Component {
    state = {
        PeopleList: []
    }    
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
} */
class People extends React.Component {
    state = {
        PeopleList: []
    }
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
        return (
            <Router>
                <div className="container">
                    <Switch>
                        <Route path="/" exact component={() => (
                            <PeopleList
                                PeopleList={this.state.PeopleList}
                            />
                        )}
                        ></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default People;