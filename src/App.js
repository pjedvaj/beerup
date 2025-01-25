import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { BeerupProvider } from './components/BeerupContext';

import './common/scss/styles.scss';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Menu from './components/layouts/Menu';
import Main from './components/pages/Main';
import Favorites from './components/pages/Favorites';
import Join from './components/pages/Join';

class App extends Component {

  render() {
      return (
        <BeerupProvider>
          <Router>
              <Header />
              <Menu />
                <Route exact path="/beerup" component={Main} />
                <Route path="/favorites" component={Favorites} />
                <Route path="/join" component={Join} />
              <Footer />
          </Router>
        </BeerupProvider>
      );
    }
    
}

export default App;
