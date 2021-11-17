import React from "react";
import { groceries } from "./groceries";


export class Groceries extends React.Component {
    constructor(props) {
        super(props);
        this.groceris = groceries;
    }
    
    createCartItem () {
       const listItems =  this.groceris.map (item => {
           return <li key={item} name={item} onClick={(e) => this.props.onClick(e)}>{item}</li>
       })
       return listItems;
    }
    
    render () {
        return (
            <div className="groceries-div">
                <h1>groceries<img src="https://s2.svgbox.net/illlustrations.svg?ic=snowman&color=000000" alt="" width="32" height="32"></img></h1>
                <ul>
                    {this.createCartItem()}
                </ul>
            </div>
        )
    }

}