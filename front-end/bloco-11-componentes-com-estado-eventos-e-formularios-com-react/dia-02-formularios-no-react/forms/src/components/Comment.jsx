import React, { Component } from 'react';

class Comment extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor="comment">
        leave a comment

        <textarea
          name="comment"
          id="comment"
          value={ value }
          onChange={ handleChange }
        >
        </textarea>

        {value.length > 200 ? 'too many characters' : ''}
      </label>
    );
  }
}

export default Comment;
