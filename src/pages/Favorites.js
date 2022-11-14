import React from 'react';
import Header from '../components/Header/Header';
import MusicCard from '../components/MusicCard/MusicCard';
import LoadingMessage from '../components/LoadingMessage';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Favorites extends React.Component {
  isMount = false

  constructor() {
    super();
    this.state = {
      favoriteSongsList: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.isMount = true;
    this.setState({ isLoading: true });
    getFavoriteSongs().then((songsList) => {
      if (this.isMount) {
        this.setState({ favoriteSongsList: songsList, isLoading: false });
      }
    });
  }

  componentWillUnmount() {
    this.isMount = false;
  }

  removeFromFavorites = (trackId) => {
    this.setState(({ favoriteSongsList }) => {
      const newList = favoriteSongsList.filter((song) => song.trackId !== trackId);
      return { favoriteSongsList: newList };
    });
  }

  render() {
    const { favoriteSongsList, isLoading } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        { isLoading
          ? <LoadingMessage />
          : <div className='container'>
            {
              favoriteSongsList.map(({ trackId, ...songData }) => (
                <MusicCard
                  { ...songData }
                  key={ trackId }
                  trackId={ parseInt(trackId, 10) }
                  removeFromFavorites={ this.removeFromFavorites }
                />
              ))
            }
          </div> 
        }
      </div>
    );
  }
}

export default Favorites;
