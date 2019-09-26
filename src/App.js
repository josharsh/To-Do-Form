import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from "react-router-dom";
import { render } from 'react-dom';
import Confirm from './Confirm'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
         <Form />
        </p>
        
      </header>

 </div>


  );
}

export default App;
