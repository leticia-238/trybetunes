import React from 'react';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import LoadingMessage from '../components/LoadingMessage';
import AlbumCard from '../components/AlbumCard';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      artistName: '',
      searchArtistIsLoading: false,
      searchArtistIsFinished: false,
      albumData: [],
      saveArtistName: '',
    };
  }

  handleInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  searchArtist = async (artist) => {
    this.setState(
      { artistName: '', searchArtistIsLoading: true, saveArtistName: artist },
    );
    const response = await searchAlbumsAPI(artist);
    this.setState({
      searchArtistIsLoading: false,
      searchArtistIsFinished: true,
      albumData: response,
    });
  }

  render() {
    const { artistName, searchArtistIsLoading, searchArtistIsFinished,
      albumData, saveArtistName } = this.state;
    const minNumOfChars = 2;

    return (
      <div data-testid="page-search">
        <Header />
        { searchArtistIsLoading
          ? <LoadingMessage />
          : (
            <>
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
                  onClick={ () => this.searchArtist(artistName) }
                  disabled={ artistName.length < minNumOfChars }
                  className="btn"
                >
                  Pesquisar
                </button>
              </form>
              { searchArtistIsFinished
                ? (
                  <>
                    <p>
                      { `Resultado de álbuns de: ${saveArtistName}` }
                    </p>
                    <div>
                      { albumData.length > 0
                        ? albumData.map((album) => (
                          <AlbumCard { ...album } key={ album.collectionId } />
                        ))
                        : <span>Nenhum álbum foi encontrado</span>}
                    </div>
                  </>
                )
                : ''}
            </>
          )}
      </div>
    );
  }
}

export default Search;
