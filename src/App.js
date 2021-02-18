import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './Pages/About';

import contact from './Pages/contact';

import payment from './Pages/payment';
import Trending from './Pages/Trending';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Trending" component={Trending} />
          <Route path="/payment" component={payment} />
          <Route path="/contact" component={contact} />
          
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
)

export default App;
