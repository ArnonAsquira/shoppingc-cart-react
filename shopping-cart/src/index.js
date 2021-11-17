import React from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import { Header } from './components/header';

class Main extends React.Component {
    render() {
        return (
            < Header />
        );
    }
}

ReactDOM.render(
    < Main />,
    document.getElementById('root')
);