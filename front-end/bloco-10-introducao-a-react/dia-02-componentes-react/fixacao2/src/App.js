import React, { Component } from 'react';
import './App.css';
import UserProfile from './UserProfile';
// import Order from './Order';

class App extends Component {
  render() {
    const users = [
      {
        id: 102,
        name: 'João',
        email: 'joao@gmail.com',
        avatar: 'https://cdn.pixabay.com/photo/2016/08/20/05/38/avatar-1606916_640.png'
      },
      {
        id: 77,
        name: 'Amélia',
        email: 'amelia@gmail.com',
        avatar: 'https://cdn.pixabay.com/photo/2017/01/31/13/05/cameo-2023867_640.png'
      },
    ]

    // const headphone = {
    //   id: 102,
    //   user: "cena@gmail.com",
    //   product: "Razer Headphone",
    //   price: {
    //     value: 99.99,
    //     currency: "dollars"
    //   }
    // };

    // const energyDrink = {
    //   id: 77,
    //   user: "cena@gmail.com",
    //   product: "Monster 500mL",
    //   price: {
    //     value: 9.99,
    //     currency: "dollars"
    //   }
    // };

    return (
      <div className="App">
        {users.map((user) => <UserProfile key={user.id} user={ user } />)}

        {/* <h1> Orders recently created </h1>
          <Order order={headphone} />
          <Order order={energyDrink} /> */}
      </div>
    );
  }
}

export default App;
