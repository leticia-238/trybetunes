import React from 'react';
import { getUser } from '../services/userAPI';
import LoadingMessage from './LoadingMessage';

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
            <header data-testid="header-component">
              <p data-testid="header-user-name">{ user.name }</p>
            </header>
          )
          : <LoadingMessage />}
      </div>
    );
  }
}

export default Header;
