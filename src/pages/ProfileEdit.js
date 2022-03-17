import React from 'react';
import Header from '../components/Header';
import LoadingMessage from '../components/LoadingMessage';
import { getUser } from '../services/userAPI';

class ProfileEdit extends React.Component {
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

  handleChange = () => {

  }

  render() {
    const { isLoading, userName, email, image, description } = this.state;
    return (
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
                    name="username"
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
                <label htmlFor="edit-input-description" className="label-box description">
                  Descrição
                  <textarea
                    name="description"
                    id="edit-input-description"
                    data-testid="edit-input-description"
                    onChange={ this.handleChange }
                    className="input-field"
                  >
                    {description}
                  </textarea>
                </label>
                <button
                  type="button"
                  data-testid="edit-button-save"
                  className="btn"
                >
                  Salvar
                </button>
              </form>
            </div>
          )}
      </div>
    );
  }
}

export default ProfileEdit;
