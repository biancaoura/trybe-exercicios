import React, { Component } from 'react';
import '../styles/box.css';
import MyContext from '../context/MyContext';

class ColorBox extends Component {
  render() {
    const { colors, colorIndex, switchColor } = this.context;
    return (
      <div>
        <button
          type="button"
          className="box"
          style={ { backgroundColor: colors[colorIndex] } }
          onClick={ switchColor }
          >
          Click me to change my color!
        </button>
      </div>
    )
  }
}

ColorBox.contextType = MyContext;

export default ColorBox;
