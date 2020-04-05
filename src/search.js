import React, { Component } from 'react';


class Search extends Component {
    handleSeacrchClick = (event) => {
        console.log(event.target.textContent);
    }
 
    render() {
        return (
            <button onClick={this.handleSearchClick}>Click me!</button>
        )
    }
}
 
export default Search