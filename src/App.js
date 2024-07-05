import React from 'react';
import './App.scss';
import TopNav from './components/topNav/topnav';
import Hero from './components/hero/hero';
import Footer from './components/footer/footer';
import Cards from './components/card/card';
import Events from './components/events/events';
import Player from './components/player/player';

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
      <Hero></Hero>
      <Cards></Cards>
      <Events></Events>
      <Footer></Footer>
    </div>
  );
}

export default App;
