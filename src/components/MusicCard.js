import React from 'react';
import PropTypes from 'prop-types';
import { addSong } from '../services/favoriteSongsAPI';
import LoadingMessage from './LoadingMessage';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteSong: false,
      addSongIsLoading: false,
    };
  }

  checkFavoriteSong = async ({ target: { checked } }) => {
    this.setState({ favoriteSong: checked, addSongIsLoading: true });
    if (checked) {
      await addSong(this.props);
      this.setState({ addSongIsLoading: false });
    }
  }

  render() {
    const { trackName, previewUrl, trackId, favoriteSongsList } = this.props;
    const { favoriteSong, addSongIsLoading } = this.state;

    return (
      <div>
        {addSongIsLoading
          ? <LoadingMessage />
          : (
            <div>
              <h3>{trackName}</h3>
              <audio data-testid="audio-component" src={ previewUrl } controls>
                <track kind="captions" />
                O seu navegador não suporta o elemento
                <code>audio</code>
                .
              </audio>
              <label htmlFor={ `checkbox-music-${trackId}` }>
                Favorita
                <input
                  type="checkbox"
                  id={ `checkbox-music-${trackId}` }
                  data-testid={ `checkbox-music-${trackId}` }
                  checked={ favoriteSongsList.includes(trackId) || favoriteSong }
                  onChange={ this.checkFavoriteSong }
                />
              </label>
            </div>
          )}
      </div>
    );
  }
}

MusicCard.propTypes = {
  trackName: PropTypes.string.isRequired,
  previewUrl: PropTypes.string.isRequired,
  trackId: PropTypes.number.isRequired,
  favoriteSongsList: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default MusicCard;
