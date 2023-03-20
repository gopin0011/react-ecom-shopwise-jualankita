import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
// import AppRoutes from './AppRoutes';

import Home from './pages/Home';

class App extends Component {
  state = {}
  componentDidMount() {
    this.onRouteChanged();
  }

  onRouteChanged() {
  }

  render () {
    let headerComponent = <Header/>;
    let footerComponent = <Footer/>;
    return (
      <div>
        { headerComponent }
        <div>
          <Home />
        </div>
        { footerComponent }
      </div>
    );
  }

  

}

export default withRouter(App);
