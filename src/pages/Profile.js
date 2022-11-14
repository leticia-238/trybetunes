import React from 'react';
import { Link } from 'react-router-dom';
import { basePath } from '../App';
import Header from '../components/Header';
import LoadingMessage from '../components/LoadingMessage';
import { getUser } from '../services/userAPI';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    getUser().then(({ name, email, image, description }) => {
      this.setState(
        { userName: name, email, image, description, isLoading: false },
      );
    });
  }

  render() {
    const { isLoading, userName, email, image, description } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        {isLoading
          ? <LoadingMessage />
          : (
            <div>
              <img data-testid="profile-image" src={ image } alt="Imagem do usuário" />
              <h2>{ userName }</h2>
              <p>{ email }</p>
              <p>{ description }</p>
              <Link to={`${ basePath }/profile/edit`}>Editar perfil</Link>
            </div>
          )}
      </div>
    );
  }
}

export default Profile;
