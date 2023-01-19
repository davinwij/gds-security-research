import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleApiAuth from './Hooks/GoogleApiAuth';
import LookerIframe from './Components/LookerIframe';

function App() {
  return (
    <div className="App">
      <GoogleApiAuth />
      <LookerIframe />      
    </div>
  );
}

export default App;
