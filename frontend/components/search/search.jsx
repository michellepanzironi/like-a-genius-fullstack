import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  constructor(props) {
    this.state = {
      query: '',
      results: []
    };
  }

  getSuggestions() {
    // write an ajax request method that calls ...songs, artists, albums
  }

  update() {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.getSuggestions();
        }
      }
    });
  }

  render () {
    let searchlist;

    return (
      <div>
        <form>
          <input
            placeholder="Search"
            ref={input => this.search = input}
            onChange={this.update}
            className="live-search-bar"
            />
          <p>{this.state.query}</p>
        </form>
        <ul className="live-search-list"></ul>
      </div>
       )
  }
}

export default Search;
