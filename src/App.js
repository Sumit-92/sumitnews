import './App.css';
import Navbar from './components/Navbar';
import News from './components/News';
import { Component } from 'react';

export class App extends Component() {
  render(){
    return (
      <div className="container">
        <Navbar/>
        <News/>
      </div>
    )
  }
  
}

export default App;
