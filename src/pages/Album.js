import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import AlbumCard from '../components/AlbumCard';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      musicsList: [],
      artistName: '',
      collectionName: '',
      artworkUrl100: '',
    };
  }

  componentDidMount() {
    const { id } = this.props;
    getMusics(id).then((response) => {
      this.setState({
        musicsList: response.filter(({ kind }) => kind === 'song'),
        artistName: response[0].artistName,
        collectionName: response[0].collectionName,
        artworkUrl100: response[0].artworkUrl100,
      });
    });
  }

  render() {
    const { musicsList, ...rest } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <AlbumCard { ...rest } />
        {
          musicsList.map(({ trackId, ...dataMusic }) => (
            <MusicCard key={ trackId } { ...dataMusic } trackId={ trackId } />
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
