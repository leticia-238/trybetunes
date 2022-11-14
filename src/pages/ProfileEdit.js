import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { basePath } from '../App';
import Header from '../components/Header/Header';
import LoadingMessage from '../components/LoadingMessage/LoadingMessage';
import { getUser, updateUser } from '../services/userAPI';

class ProfileEdit extends React.Component {
  isMount = false;

  constructor() {
    super();
    this.state = {
      isLoading: true,
      editFinished: false,
      userName: '',
      email: '',
      image: '',
      description: '',
    };
  }

  componentDidMount() {
    this.isMount = true;
    getUser().then(({ name, email, image, description }) => {
      this.setState(
        { userName: name, email, image, description, isLoading: false },
      );
    });
  }

  componentWillUnmount() {
    this.isMount = false;
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }

  handleClick = () => {
    const { userName, email, image, description } = this.state;
    this.setState({ isLoading: true });
    updateUser({ name: userName, email, image, description })
      .then(() => {
        if (this.isMount) {
          this.setState({ isLoading: false, editFinished: true });
        }
      });
  }

  validForm = () => {
    const { userName, email, image, description } = this.state;
    const regexForEmail = /\S+@\S+\.com/;
    return userName.trim().length > 0 && image.trim().length > 0
    && description.trim().length > 0 && regexForEmail.test(email);
  }

  render() {
    const { editFinished, isLoading, userName, email, image, description } = this.state;
    const { ...rest } = this.props;
    return (
      <Route { ...rest }>
        {editFinished
          ? <Redirect to={`${ basePath }/profile`} />
          : (
            <div data-testid="page-profile-edit">
              <Header />
              {isLoading
                ? <LoadingMessage />
                : (
                  <div className="page-profile">
                    <form className="form-box">
                      <img
                        data-testid="profile-image"
                        src={ image }
                        alt="Imagem do usuário"
                        className="user-image"
                      />
                      <label htmlFor="edit-input-name" className="label-box">
                        Nome de usuário
                        <input
                          type="text"
                          name="userName"
                          id="edit-input-name"
                          data-testid="edit-input-name"
                          value={ userName }
                          onChange={ this.handleChange }
                          className="input-field"
                        />
                      </label>
                      <label htmlFor="edit-input-email" className="label-box">
                        e-mail
                        <input
                          type="text"
                          name="email"
                          id="edit-input-email"
                          data-testid="edit-input-email"
                          value={ email }
                          onChange={ this.handleChange }
                          className="input-field"
                        />
                      </label>
                      <label htmlFor="edit-input-image" className="label-box">
                        Url da imagem
                        <input
                          type="text"
                          name="image"
                          id="edit-input-image"
                          data-testid="edit-input-image"
                          value={ image }
                          onChange={ this.handleChange }
                          className="input-field"
                        />
                      </label>
                      <label
                        htmlFor="edit-input-description"
                        className="label-box description"
                      >
                        Descrição
                        <textarea
                          name="description"
                          id="edit-input-description"
                          data-testid="edit-input-description"
                          onChange={ this.handleChange }
                          className="input-field"
                          value={ description }
                        />
                      </label>
                      <button
                        type="button"
                        data-testid="edit-button-save"
                        disabled={ !this.validForm() }
                        className="btn"
                        onClick={ this.handleClick }
                      >
                        Salvar
                      </button>
                    </form>
                  </div>
                )}
            </div>
          )}
      </Route>
    );
  }
}

export default ProfileEdit;
