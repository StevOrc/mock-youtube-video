import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "The Office" };

  onInputChange = (event) => {
    let term = event.target.value;
    this.setState({ term });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onTermsubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              type="text"
            />
            term : {this.state.term}
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
