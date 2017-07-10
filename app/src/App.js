import React, { Component } from 'react';
import Header from './components/header/Header.js'
import Footer from './components/footer/Footer'
import Main from './components/main/Main'
import './App.css';

class App extends Component {
  render() {
    return (
    <div>
      <Header />

      <Main />

      <Footer />
    </div>
    );
  }
}

export default App;
