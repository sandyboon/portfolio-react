import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <>
        <Header />
        <Switch>
          <Route exact path={'/'}>
            <Home />
          </Route>
          <Route exact path={'/about'}>
            <About />
          </Route>
          <Route exact path={'/skills'}>
            <Skills />
          </Route>
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
