import React from "react";
import { groceries } from "./groceries";


export class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.groceris = groceries;
    }
    
    render () {
        return (
            <div className="groceries-div">
                <h1>Basket</h1>
                <ul>
                    {this.props.basketItems}
                </ul>
            </div>
        )
    }

}