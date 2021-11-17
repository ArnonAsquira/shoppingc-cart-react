import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import { Header } from './components/header';
import { Groceries } from './components/main-content/groceries-logic';
import { Basket } from './components/main-content/basket';

class Main extends React.Component {
    constructor(props) {
        super (props);
        this.basketItems = null;
    }
    render() {
        return (
            <main>
                < Header />
                <div className="content-lists">
                < Groceries />
                < Basket />
                </div>
            </main>
        );
    }
}

ReactDOM.render(
    < Main />,
    document.getElementById('root')
);