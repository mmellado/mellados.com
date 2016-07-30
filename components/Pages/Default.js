import React, { Component } from 'react';
import { Link } from 'react-router';
import config from '../../config';

// Dispatcher
import AppDispatcher from '../../dispatcher/AppDispatcher';

export default class Default extends Component {

  componentWillMount() {
    this._getPageData();
  }

  componentDidMount() {
    const data = this.props.data;
    document.title = config.site.title + ' | ' + data.page.title;
  }

  _getPageData() {
    AppDispatcher.dispatch({
      action: 'get-page-data',
      page_slug: 'hello'
    })
  }

  render(){
    return (
      <div id="main-content" className="hello">
        zomg omg omg
      </div>
    )
  }
}
