import React, { Component } from 'react';
import { node } from 'prop-types';
import MyContext from './MyContext';

export default class Provider extends Component {
  state = {
    colors: ['blue', 'red', 'yellow'],
    colorIndex: 0,
  };

  switchColor = () => {
    const { colors, colorIndex } = this.state;

    colorIndex < colors.length - 1
    ? this.setState(({ colorIndex }) => ({ colorIndex: colorIndex + 1}))
    : this.setState({ colorIndex: 0 })
  };

  render() {
    const contextValue = {
      ...this.state,
      switchColor: this.switchColor,
    };
    const { children } = this.props;

    return (
      <MyContext.Provider value={contextValue}>
        {children}
      </MyContext.Provider>
    )
  }
}

Provider.propTypes = {
  children: node.isRequired,
};
