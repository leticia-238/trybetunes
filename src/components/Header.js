import React from 'react';
import { getUser } from '../services/userAPI';
import LoadingMessage from './LoadingMessage';
import LogoHeader from '../assets/logoHeader.png';

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
          )
          : <LoadingMessage />}
      </div>
    );
  }
}

export default Header;
