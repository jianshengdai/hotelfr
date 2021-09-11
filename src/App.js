import React ,{ Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import HeaderMain from './components/Header/HeaderMain';
class App extends Component {
  render(){
    return(
      <div className="App">
        <Header />
        <Navigation />
        <HeaderMain />

      </div>
    );
  }
}

export default App;
