import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Home/Banner';
import Home from './Components/Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
