import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Dispatcher
import AppDispatcher from '../dispatcher/AppDispatcher';

// Store
import AppStore from '../stores/AppStore';

// Components
import Nav from './Partials/Nav';
import Footer from './Partials/Footer';
import Loading from './Partials/Loading';

export default class App extends Component {

  // Add change listeners to stores
  componentDidMount() {
    AppStore.addChangeListener(this._onChange.bind(this));
  }

  // Remove change listeners from stores
  componentWillUnMount() {
    AppStore.removeChangeListener(this._onChange.bind(this));
  }

  _getStore() {
    AppDispatcher.dispatch({
      action: 'get-app-store'
    });
  }

  _onChange() {
    this.setState(AppStore);
  }

  render(){
    const path = this.props.location.pathname;
    const data = AppStore.data
    const timeout = data.animation_timeout;

    // Show loading for browser
    if (!data.ready) {

      document.body.className = '';
      this._getStore();

      return (
        <div className="container text-center">
          <Loading />
        </div>
      );
    }

    let transitionName = path.split('/')[2] ? 'back' : 'load';

    // Server first
    const Routes = React.cloneElement(this.props.children, {
      data: data,
      key: path
    });

    return (
      <div id="js-body" className={data.titleColor}>
        <Nav data={ data }/>
        <ReactCSSTransitionGroup
          transitionName={transitionName}
          transitionAppear={true}
          transitionLeave={true}
          transitionAppearTimeout={timeout * 2}
          transitionEnterTimeout={timeout * 2}
          transitionLeaveTimeout={timeout}
          component="div"
          className="animation-container">

          <h1 className="title"><span>{data.pageTitle}</span></h1>
          { Routes }

        </ReactCSSTransitionGroup>
        <Footer data={ data }/>
      </div>
    );
  }
}
