import React from 'react';
import PropTypes from 'prop-types';
import { addSong, removeSong, getFavoriteSongs } from '../services/favoriteSongsAPI';
import LoadingMessage from './LoadingMessage';

class MusicCard extends React.Component {
  isMount = false

  constructor() {
    super();
    this.state = {
      favoriteSong: false,
      addSongIsLoading: false,
    };
  }

  componentDidMount() {
    this.isMount = true;
    const { trackId } = this.props;
    getFavoriteSongs().then((response) => {
      if (this.isMount) {
        this.setState({
          favoriteSong: response.map((song) => song.trackId).includes(trackId),
        });
      }
    });
  }

  componentWillUnmount() {
    this.isMount = false;
  }

  checkFavoriteSong = async ({ target: { checked } }) => {
    this.setState({ favoriteSong: checked, addSongIsLoading: true });
    const { trackName, previewUrl, trackId, removeFromFavorites } = this.props;
    if (checked) {
      await addSong({ trackName, previewUrl, trackId });
    } else {
      await removeSong({ trackName, previewUrl, trackId });
      removeFromFavorites(trackId);
    }
    if (this.isMount) {
      this.setState({ addSongIsLoading: false });
    }
  }

  render() {
    const { trackName, previewUrl, trackId } = this.props;
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
                  checked={ favoriteSong }
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
  removeFromFavorites: PropTypes.func.isRequired,
};

export default MusicCard;
