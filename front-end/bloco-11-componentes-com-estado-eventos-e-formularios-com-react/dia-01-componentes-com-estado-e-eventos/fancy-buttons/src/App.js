import React from 'react';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      numeroDeCliques: 0,
    };
  }

  handleClick = ()  => {
    this.setState(({ numeroDeCliques }) => ({
      numeroDeCliques: numeroDeCliques + 1,
    }), () => {
      console.log(this.isEven(this.state.numeroDeCliques));
      console.log(this.state.numeroDeCliques);
    });
  };

  isEven = (num) => num % 2 === 0 ? 'green' : 'white';

  render() {
    const { numeroDeCliques } = this.state;
    return <button
      onClick={this.handleClick}
      style={{backgroundColor: this.isEven(numeroDeCliques)}}
      >
        {numeroDeCliques}
      </button>
  }
}

export default App;