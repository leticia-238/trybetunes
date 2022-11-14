import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AlbumCard from './AlbumCard';
import { basePath } from '../App'

class AlbumList extends React.Component {
  render() {
    const { albumData } = this.props;

    return (
      <div>
        { albumData.length > 0
          ? (
            albumData.map(({ collectionId, ...rest }) => (
              <Link
                to={ `${ basePath }/album/${collectionId}` }
                data-testid={ `link-to-album-${collectionId}` }
                key={ collectionId }
              >
                <AlbumCard { ...rest } />
              </Link>
            ))
          )
          : <span>Nenhum álbum foi encontrado</span>}
      </div>
    );
  }
}

AlbumList.propTypes = {
  albumData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default AlbumList;
