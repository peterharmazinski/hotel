import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Header from  './Header'
import MainContent from './MainContent';
import Footer from './Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <MainContent></MainContent>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
