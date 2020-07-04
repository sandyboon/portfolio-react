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
          <Route exact path={'/deployed-react-portfolio/'}>
            <Home />
          </Route>
          <Route exact path={'/deployed-react-portfolio/about'}>
            <About />
          </Route>
          <Route exact path={'/deployed-react-portfolio/skills'}>
            <Skills />
          </Route>
          <Route exact path={'/deployed-react-portfolio/projects'}>
            <Work />
          </Route>
          <Route exact path={'/deployed-react-portfolio/contact'}>
            <Contact />
          </Route>
        </Switch>
      </>
    </Router>
  );
}

export default App;
