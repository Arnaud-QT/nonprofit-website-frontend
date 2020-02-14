import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import $ from 'jquery';
import Header from './Header.js';
import Menu from './Menu.js';
import Form from './Form.js';
import {BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div>
      <Route exact path="/" component={Menu}/>
      <Route exact path="/" component={Header}/>
     <Route exact path="/form" component={Form}/>
    </div>
    </BrowserRouter>
  );
}

export default App;
