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
        <form className="search-box">
          <input
            type="text"
            data-testid="search-artist-input"
            id="search-artist-input"
            name="artistName"
            value={ artistName }
            onChange={ this.handleInput }
            placeholder="Nome do Artista"
            className="input-field"
          />
          <button
            type="button"
            data-testid="search-artist-button"
            onClick={ this.searchArtist }
            disabled={ artistName.length < minNumOfChars }
            className="btn"
          >
            Pesquisar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
