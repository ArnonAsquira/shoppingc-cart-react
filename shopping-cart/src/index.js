import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import { Header } from './components/header';
import { Groceries } from './components/main-content/groceries-logic';
import { Basket } from './components/main-content/basket';
import { SearchBar } from './components/main-content/serachBar';
import { Footer } from './components/footer';

class Main extends React.Component {
    constructor(props) {
        super (props);
        this.state = {
            bsaketItems: {},
        }
    }
    // add item function 
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
    // remove a single item from cart
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
    
    // search bar function
    FilterSearch(e) {
        const contentLists = Array.from(document.querySelector('.content-lists').children);
        const input = e.target.value;
        contentLists.forEach(list => {
            const groceries = Array.from(list.children).find(child => child.tagName === 'UL');
            if (groceries) {
                Array.from(groceries.children).forEach(item => {
                    if (item.textContent.toLocaleLowerCase().includes(input)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                        console.log(item)
                    }
                })
            }
        })
    }

    render() {
        return (
            <main>
                < Header />
                <div className="content-lists">
                    < Groceries onClick={(e) => this.addItemToBasket(e)} />
                    < SearchBar onClick={(e) => this.FilterSearch(e)}/>
                    < Basket onClick={(e) => this.handleBasketItems(e)} basketItems={this.state.bsaketItems}/>
                </div>
                < Footer />
            </main>
        );
    }
}

ReactDOM.render(
    < Main />,
    document.getElementById('root')
);