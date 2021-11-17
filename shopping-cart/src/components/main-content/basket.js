import React from "react";
import { groceries } from "./groceries";


export class Basket extends React.Component {
    constructor(props) {
        super(props);
        this.groceris = groceries;
    }

    renderBasketItems(basketItems) {
        const basketItemsArray = [];
        for (let property in basketItems) {
            if (basketItems[property] <= 0) continue;
            basketItemsArray.push(<li key={property} 
                onClick={(e) => this.props.onClick(e)}>
                {`${property}: ${basketItems[property]}`}
                <button className='decrement-button' name={property}>-
                </button>
                </li>)
        }
        return(basketItemsArray);
    }
    
    render () {
        return (
            <div className="groceries-div">
                <h1>Basket</h1>
                <ul> 
                    {this.renderBasketItems(this.props.basketItems)}
                </ul>
            </div>
        )
    }

}