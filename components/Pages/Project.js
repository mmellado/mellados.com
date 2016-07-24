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
      page_slug: 'projects',
      post_slug: this.props.params.slug
    });
  }

  render() {
    const data = this.props.data;
    const project = data.page;

    if (!project.fields) {
      return(
        <NoMatch />
      );
    }

    let md = new Remarkable();

    return (
      <div id="main-content" className="project">
        <Link to="/projects">&lt;&lt; Back to Projects</Link>
        <h2>{ project.fields.name }</h2>
        <div className="description" dangerouslySetInnerHTML={ {__html: md.render(project.fields.description) } }></div>
        <a href={project.fields.githuburl} target="_blank">See on GitHub</a>
        <h3>Demo</h3>
        <div className="pen" dangerouslySetInnerHTML={ {__html: project.fields.embededCodepen } }></div>
      </div>
    );
  }
}
