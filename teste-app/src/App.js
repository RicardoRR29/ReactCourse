import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: 'Frankenstrein',
          id: 'asc1'
        },
        {
          name: 'Drakula',
          id: 'asr2'
        },
        {
          name: 'Zombie',
          id: 'as1w'
        }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => <h1>{ monster.name }</h1>)
        }
      </div>
    );
  }
  
}

export default App;
