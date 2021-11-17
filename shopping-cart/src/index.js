import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import { Header } from './components/header';
import { Groceries } from './components/main-content/groceries-logic';
import { Basket } from './components/main-content/basket';

class Main extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            bsaketItems: {},

        }
    }

    addItemToBasket(e) {
        const item = e.target.getAttribute('name');
        const newBasketItems = this.state.bsaketItems;
        if (!newBasketItems[item]) {
            newBasketItems[item] = 1;
        } else {
            newBasketItems[item] ++;
        }
        this.setState({bsaketItems: newBasketItems});
    }

    handleBasketItems(e) {
        if (e.target.className === 'decrement-button'){
            const item = e.target.getAttribute('name');
            const newBasketItems = this.state.bsaketItems;
            if (newBasketItems[item] === 1) {
                newBasketItems[item] = 0;
            } else {
                newBasketItems[item] --;
            }
            this.setState({bsaketItems: newBasketItems});
        }
    }

    render() {
        return (
            <main>
                < Header />
                <div className="content-lists">
                < Groceries onClick={(e) => this.addItemToBasket(e)} />
                < Basket onClick={(e) => this.handleBasketItems(e)} basketItems={this.state.bsaketItems}/>
                </div>
            </main>
        );
    }
}

ReactDOM.render(
    < Main />,
    document.getElementById('root')
);