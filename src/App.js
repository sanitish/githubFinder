import React from 'react';
import Nav from './components/layouts/Nav';
import About from './components/pages/About';
import User from './components/users/User';
import HomePage from './components/users/HomePage';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import GithubState from './context/github/GithubState';
import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
const App = (props) => {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Nav title='Github Finder' />
          <div className='container'>
            <Switch>
              <Route exact
                path='/' 
                component={Home} 
              />
              <Route exact 
                path='/about'
                component={About} 
              />
              <Route exact
                path='/user/:login'
                component={User}
              />
              <Route exact
                path='/home'
                component={HomePage}
              />
              <Route
                component={NotFound}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}


export default App;
