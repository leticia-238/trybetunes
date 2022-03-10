import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import AlbumCard from '../components/AlbumCard';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      songsList: [],
      artistName: '',
      collectionName: '',
      artworkUrl100: '',
      favoriteSongsList: [],
    };
  }

  componentDidMount() {
    const { id } = this.props;
    getMusics(id).then((response) => {
      this.setState({
        songsList: response.filter(({ kind }) => kind === 'song'),
        artistName: response[0].artistName,
        collectionName: response[0].collectionName,
        artworkUrl100: response[0].artworkUrl100,
      });
    });
    getFavoriteSongs().then((response) => {
      this.setState({
        favoriteSongsList: response.map(({ trackId }) => trackId),
      });
    });
  }

  render() {
    const { songsList, favoriteSongsList, ...rest } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <AlbumCard { ...rest } />
        {
          songsList.map(({ trackId, ...dataMusic }) => (
            <MusicCard
              key={ trackId }
              { ...dataMusic }
              trackId={ trackId }
              favoriteSongsList={ favoriteSongsList }
            />
          ))
        }
      </div>
    );
  }
}

Album.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Album;
