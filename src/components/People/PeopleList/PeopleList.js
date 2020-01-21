import React, {Fragment} from 'react';
import "./PeopleList.css";
import PeopleItem from "./PeopleItem/peopleItem"

const PeopleList = ({
    PeopleList    
}) => {
    const ListItem = PeopleList.map((item) => {
        return <PeopleItem
            name={item.name}
            height={item.height}
        ></PeopleItem>
    })
    return(
        <Fragment>
            {ListItem}
        </Fragment>
    )
}