import React, { Component } from 'react';
// import './App.css'
import Dashboard from './components/layout/dashboard'
import firebase from './config/firebase';
import Signup from './components/signup'
import {BrowserRouter, Route} from 'react-router-dom';
import Login from './components/login'
import Footer from './components/layout/footer'
import Cards from './components/layout/card'



class App extends Component {
  render() {
    return (
      <div className="App">
      <BrowserRouter>
        <>
          
          <Route path='/signup' render={() => <Signup />}  exact/>
          <Route path='/' render={() => <Login />} exact />
          <Route path='/dashboard' render={() => <Dashboard />}  exact/>
           <Route path='/card' render={() => <Cards />}  exact/> 

     
        </>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;