import React, { Component } from 'react';
import "../styles/app.css"
import Navbar from './Navbar'
import CardList from './CardList'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <CardList />
        <Footer />
      </div>
    );
  }
}

export default App;
