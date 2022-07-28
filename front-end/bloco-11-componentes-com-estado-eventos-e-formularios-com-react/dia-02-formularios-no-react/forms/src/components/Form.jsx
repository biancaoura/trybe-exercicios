import React, { Component } from 'react';
import Username from './Username';
import Comment from './Comment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      subscription: '',
      username: '',
      password: '',
      fieldType: 'password',
      comment: '',
      agree: false,
      formWithError: true,
    }
  }

  handleError = () => {
    const { subscription, username, password, agree } = this.state;

    const errorCases = [
      !subscription,
      !username.length,
      !password.length,
      !agree,
    ]

    const filledForm = errorCases.every((error) => error === false);

    this.setState({
      formWithError: !filledForm,
    })
  }

  handleShowPassword = () => {
    this.setState({
      fieldType: this.state.fieldType === 'password' ? 'text' : 'password',
    })
  }
  
  handleChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => { this.handleError(); }
    )
  }
  
  render() {
    const { subscription, username, password, fieldType, comment, agree } = this.state;
    const { handleChange, handleShowPassword } = this;

    const eye = <FontAwesomeIcon icon={faEye} />;
    const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

    return (
      <div>

        <label htmlFor="subscription">
          choose subscription
          <select name="subscription" value={ subscription } onChange={ handleChange }>

            <option value=""></option>
            <option value="weekly">weekly</option>
            <option value="monthly">monthly</option>
            <option value="annual">annual</option>

          </select>
        </label>

        <Username
          value={ username }
          handleChange={ handleChange }
        />

        <label htmlFor="password">
          password

          <input 
            type={ fieldType }
            name="password"
            id="password"
            value={ password }
            onChange={ handleChange }
          />
          <button onClick={ handleShowPassword }>
            {fieldType === 'password' ? eye : eyeSlash}
          </button>
        </label>

        <Comment
          value={ comment }
          handleChange={ handleChange }
        />

        <label htmlFor="checkbox">
          agree?

          <input
            type="checkbox"
            name="agree"
            id="agree"
            value={ agree }
            onChange={ handleChange }
          />
        </label>

        <label htmlFor="inputFile">
          upload image

          <input type="file" />
        </label>

      </div>
    );
  }
}

export default Form;
