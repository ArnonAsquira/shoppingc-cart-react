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
            bsaketItems: 0,

        }
    }

    addItemToBasket(e) {
        console.log(e.target.getAttribute('name'));
    }

    render() {
        return (
            <main>
                < Header />
                <div className="content-lists">
                < Groceries onClick={(e) => this.addItemToBasket(e)} />
                < Basket onClick={() => this.handleBasketItems}/>
                </div>
            </main>
        );
    }
}

ReactDOM.render(
    < Main />,
    document.getElementById('root')
);