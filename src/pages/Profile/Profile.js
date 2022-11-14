import React from 'react';
import { Link } from 'react-router-dom';
import { basePath } from '../../App';
import Header from '../../components/Header/Header';
import LoadingMessage from '../../components/LoadingMessage/LoadingMessage';
import { getUser } from '../../services/userAPI';
import './Profile.css'
import UserIcon from '../../assets/user-icon.png'

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
            <div className='page-profile'>
              <img 
                className="profile-image" 
                src={ image &&  UserIcon } 
                alt="Imagem do usuário" 
              />
              <h2 className='user-name'>{ userName }</h2>
              <p className='user-email'>{ email }</p>
              <p className='user-description'>{ description }</p>
              <Link to={`${ basePath }/profile/edit`} className="btn">
                Editar perfil
              </Link>
            </div>
          )}
      </div>
    );
  }
}

export default Profile;
