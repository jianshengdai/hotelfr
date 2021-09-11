import React ,{ Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Parallax from './components/Parallax/Parallax'
class App extends Component {
  render(){
    return(
      <div className="App">
        <Header />
        <Navigation />
        <Intro/>
        <Parallax/>
      </div>
    );
  }
}

export default App;
