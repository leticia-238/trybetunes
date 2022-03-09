import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import LoadingMessage from './LoadingMessage';
import LogoHeader from '../assets/LogoHeader.svg';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      user: false,
    };
  }

  componentDidMount() {
    getUser().then((user) => {
      this.setState({ user });
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        {user
          ? (
            <>
              <header data-testid="header-component" className="header">
                <img
                  src={ LogoHeader }
                  alt="Logo TrybeTunes"
                  className="logo-header"
                />
                <div className="user-box-header">
                  <div className="header-user-image" />
                  <p
                    data-testid="header-user-name"
                    className="header-user-name"
                  >
                    { user.name }

                  </p>
                </div>
              </header>
              <nav className="nav-bar">
                <Link
                  to="/search"
                  data-testid="link-to-search"
                  className="nav-link"
                >
                  Pesquisa
                </Link>
                <Link
                  to="/favorites"
                  data-testid="link-to-favorites"
                  className="nav-link"
                >
                  Favoritas
                </Link>
                <Link
                  to="/profile"
                  data-testid="link-to-profile"
                  className="nav-link"
                >
                  Perfil
                </Link>
              </nav>
            </>
          )
          : <LoadingMessage />}
      </div>
    );
  }
}

export default Header;
