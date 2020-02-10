import React, { Component } from 'react';

import './App.css';
import Cards from './component/Cards';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    
    <div className="container" className="color" >
      <h1 className="jumbotron" className="text-center">
        AFFINITY PLUS
      
      </h1>
      <Cards />
      
    </div>
    
    
  );
}

export default App;
