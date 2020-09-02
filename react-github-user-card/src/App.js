import React from 'react';
import logo from './logo.svg';
import './App.css';

// axios 
import axios from 'axios'
// User cards
import User from './User'

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      users: [],
      followers: []
    }
  }

  // grabbing data from my Github account when mounting
  componentDidMount() {
    axios.get('https://api.github.com/users/elijahk247')
      .then(res => {
        console.log(res.data)
        const userData = res.userData
        this.setState({
          users: userData
        });
      })
      .catch(err => {
        console.log('Error: ', err)
      })
  }

  // grabbing the data of followers from my Github
  componentDidUpdate() {
    axios.get('https://api.github.com/users/elijahk247/followers')
      .then(res => {
        console.log(res.data);
        const followersData = res.data;
        this.setState({
          followers: followersData
        });
      })
  }

  render() {
    return(
      <div className='app-container'>
        <h1>Github User Cards</h1>
        <User users={this.state.users} followers={this.state.followers}/>
      </div>
    )
  }
}

export default App