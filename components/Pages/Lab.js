import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import Remarkable from 'remarkable';
import config from '../../config';

// Components
import NoMatch from './NoMatch';

// Dispatcher
import AppDispatcher from '../../dispatcher/AppDispatcher';

export default class Blog extends Component {

  componentWillMount() {
    this._getPageData();
  }

  componentDidMount() {
    const data = this.props.data;
    const pageTitle = (data.page) ? data.page.name : 'Page Not Found';
    document.title = config.site.title + ' | ' + pageTitle;
  }

  _getPageData(){
    AppDispatcher.dispatch({
      action: 'get-page-data',
      page_slug: 'labs',
      post_slug: this.props.params.slug
    });
  }

  render() {
    const data = this.props.data;
    const lab = data.page;

    if (!lab.fields) {
      return(
        <NoMatch />
      );
    }

    let md = new Remarkable();

    return (
      <div id="main-content" className="lab">
        <Link to="/labs">&lt;&lt; Back to Labs</Link>
        <h2>{ lab.fields.name }</h2>
        <div className="description" dangerouslySetInnerHTML={ {__html: md.render(lab.fields.description) } }></div>
        <div className="pen" dangerouslySetInnerHTML={ {__html: lab.fields.embededCodepen } }></div>
      </div>
    );
  }
}
