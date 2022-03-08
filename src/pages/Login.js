import React from 'react';
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { createUser } from '../services/userAPI';
import LoadingMessage from '../components/LoadingMessage';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loginName: '',
      saveUserIsloading: false,
      saveUserIsFinished: false,
    };
  }

  handleInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  saveUserOnClick = () => {
    const { loginName } = this.state;
    this.setState({ saveUserIsloading: true });
    createUser({ name: loginName })
      .then(() => this.setState({ saveUserIsFinished: true }));
  }

  render() {
    const { loginName, saveUserIsloading, saveUserIsFinished } = this.state;
    const { ...rest } = this.props;
    const minNumOfChars = 3;

    return (
      <Route { ...rest }>
        {!saveUserIsFinished
          ? (
            <div data-testid="page-login">
              Login
              {!saveUserIsloading
                ? (
                  <form>
                    <label htmlFor="login-name-input">
                      Nome de usuário
                      <input
                        type="text"
                        data-testid="login-name-input"
                        id="login-name-input"
                        name="loginName"
                        value={ loginName }
                        onChange={ this.handleInput }
                      />
                    </label>
                    <button
                      type="button"
                      data-testid="login-submit-button"
                      disabled={ loginName.length < minNumOfChars }
                      onClick={ this.saveUserOnClick }
                    >
                      Entrar
                    </button>
                  </form>
                )
                : <LoadingMessage />}
            </div>)
          : <Redirect to="/search" />}
      </Route>
    );
  }
}

export default Login;
