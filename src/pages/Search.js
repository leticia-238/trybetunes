import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  searchArtist = () => {
    //
  }

  render() {
    const { artistName } = this.state;
    const minNumOfChars = 2;

    return (
      <div data-testid="page-search">
        <Header />
        <label htmlFor="search-artist-input">
          Nome do Artista
          <input
            type="text"
            data-testid="search-artist-input"
            id="search-artist-input"
            name="artistName"
            value={ artistName }
            onChange={ this.handleInput }
          />
        </label>
        <button
          type="button"
          data-testid="search-artist-button"
          onClick={ this.searchArtist }
          disabled={ artistName.length < minNumOfChars }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

export default Search;
