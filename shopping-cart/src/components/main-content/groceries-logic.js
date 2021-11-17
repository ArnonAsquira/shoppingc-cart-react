import React from "react";
import { groceries } from "./groceries";


export class Groceries extends React.Component {
    constructor(props) {
        super(props);
        this.groceris = groceries;
    }
    
    createCartItem () {
       const listItems =  this.groceris.map (item => {
           return <li key={item}>{item}</li>
       })
       return listItems;
    }
    
    render () {
        return (
            <div className="groceries-div">
                <h1>groceries</h1>
                <ul>
                    {this.createCartItem()}
                </ul>
            </div>
        )
    }

}