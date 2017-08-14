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
        <p className="bio">
        Software engineer specialized in frontend technologies, user experience, accessibility and web animations.
        </p>
        <p className="bio">
          Marcos is currently a Senior Engineer at Airtame, where he leads the company's frontend initiatives.
          He previously worked as a UI Engineer at LinkedIn, where he contributed to the Homepage, Accessibility, and  Horizontal teams, collaborating in projects like the Homepage stream, Onboarding experience, Global navigation and the company's reusable pattern library.
          He also worked at Google as a lead engineer for the Google Fiber marketing team.
          He has a Bachelor's degree in Computer Science from Tecnológico de Monterrey.
        </p>
      </div>
    )
  }
}
