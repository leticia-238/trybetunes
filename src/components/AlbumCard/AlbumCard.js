import React from 'react';
import PropTypes from 'prop-types';
import './AlbumCard.css'

class AlbumCard extends React.Component {
  render() {
    const { artistName, collectionName, artworkUrl100 } = this.props;
    return (
      <div className='album-card'>
        <img
          src={artworkUrl100} 
          alt={collectionName} 
          className="album-image" 
        />
        <div className='album-info'>
          <h3 data-testid="album-name" className='album-name'>
            {collectionName}
          </h3>
          <p data-testid="artist-name" className='artist-name'>
            {artistName}
          </p>
        </div>
      </div>
    );
  }
}

AlbumCard.propTypes = {
  artistName: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  artworkUrl100: PropTypes.string,
};

AlbumCard.defaultProps = {
  artworkUrl100: '',
};
export default AlbumCard;
