import React, { Fragment } from 'react';
import "./peopleItem.css"

class PeopleItem extends React.Component {
    state = {
        name: this.props.name,
        height: this.props.height
    }
    
    render() {        
        let { name, height } = this.state;
        return (
            <div className="container text-center" >
                {name}
                {height}

            </div>
        )
    }
}

export default PeopleItem;