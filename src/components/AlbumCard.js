import React from 'react';
import PropTypes from 'prop-types';

class AlbumCard extends React.Component {
  render() {
    const { artistName, collectionName, artworkUrl100 } = this.props;
    return (
      <div>
        <img src={ artworkUrl100 } alt={ collectionName } />
        <h3 data-testid="album-name">{collectionName}</h3>
        <p data-testid="artist-name">{artistName}</p>
      </div>
    );
  }
}

AlbumCard.propTypes = {
  artistName: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  artworkUrl100: PropTypes.string.isRequired,
};

export default AlbumCard;
