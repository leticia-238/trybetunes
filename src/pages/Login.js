import React from 'react';
import { Route, Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import { createUser } from '../services/userAPI';
import LoadingMessage from '../components/LoadingMessage';
import LogoTrybeTunes from '../assets/LogoTrybeTunes.svg';
import { basePath } from '../App';

class Login extends React.Component {
  isMount = false;

  constructor() {
    super();
    this.state = {
      loginName: '',
      saveUserIsloading: false,
      saveUserIsFinished: false,
    };
  }

  componentDidMount() {
    this.isMount = true;
  }

  componentWillUnmount() {
    this.isMount = false;
  }

  handleInput = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  saveUserOnClick = async (loginName) => {
    this.setState({ saveUserIsloading: true });
    const response = await createUser({ name: loginName });
    if (this.isMount) {
      this.setState({ saveUserIsFinished: response === 'OK' });
    }
  }

  render() {
    const { loginName, saveUserIsloading, saveUserIsFinished } = this.state;
    const { ...rest } = this.props;
    const minNumOfChars = 3;

    return (
      <Route { ...rest }>
        {saveUserIsFinished
          ? <Redirect to={`${ basePath }/search`} />
          : (
            <div data-testid="page-login" className="page-login">
              <img src={ LogoTrybeTunes } alt="Logo TrybeTunes" className="logo" />
              {saveUserIsloading
                ? <LoadingMessage />
                : (
                  <form className="form-box">
                    <input
                      type="text"
                      data-testid="login-name-input"
                      id="login-name-input"
                      name="loginName"
                      value={ loginName }
                      onChange={ this.handleInput }
                      placeholder="Nome de usuário"
                      className="input-field"
                    />
                    <button
                      type="button"
                      data-testid="login-submit-button"
                      disabled={ loginName.length < minNumOfChars }
                      onClick={ () => this.saveUserOnClick(loginName) }
                      className="btn"
                    >
                      Entrar
                    </button>
                  </form>)}
            </div>)}
      </Route>
    );
  }
}

export default Login;
