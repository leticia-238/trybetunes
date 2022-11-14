import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import getMusics from '../services/musicsAPI';
import AlbumCard from '../components/AlbumCard/AlbumCard';
import MusicCard from '../components/MusicCard/MusicCard';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      songsList: [],
      artistName: '',
      collectionName: '',
      artworkUrl100: '',
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
  }

  render() {
    const { songsList, ...albumData } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <AlbumCard {...albumData} />
        <div className='container'>
          {
            songsList.map(({ trackId, ...songData }) => (
              <MusicCard
                key={trackId}
                {...songData}
                trackId={trackId}
                removeFromFavorites={() => { }}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

Album.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Album;
