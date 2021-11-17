import React from 'react';

export class SearchBar extends React.Component {

    render () {
        return  (
                <input type="text" onKeyUp={(e) => this.props.onClick(e)} placeholder="search items"></input>
        )
    }
}