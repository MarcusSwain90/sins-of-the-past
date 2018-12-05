import React, { Component } from 'react'

 class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ""};
  }
  
  render() {
    return (
      <div className="search-bar">
        <input
        value={}
        onChange={event => this.onInputChange(event.tartget.value)}
        />
      </div>
    )
  }
}

export default SearchBar;