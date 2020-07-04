import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Skills from './components/pages/Skills';
import Work from './components/pages/Work';
import Contact from './components/pages/Contact';

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
          <Route exact path={'/projects'}>
            <Work />
          </Route>
          <Route exact path={'/contact'}>
            <Contact />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
