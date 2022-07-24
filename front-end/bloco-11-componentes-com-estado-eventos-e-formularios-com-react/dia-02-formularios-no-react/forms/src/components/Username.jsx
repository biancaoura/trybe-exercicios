import React, { Component } from 'react';

class Username extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="username">
        username

        <input
          type="text"
          id="username"
          name="username"
          value={value}
          onChange={handleChange}
        />

        {value.length < 1 ? 'insert username' : value.length > 15 ? 'username has too many characters' : ''}
      </label>
    )
  }
}

export default Username;
