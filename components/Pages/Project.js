import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import Remarkable from 'remarkable';
import config from '../../config';

// Components
import NoMatch from './NoMatch';

// Dispatcher
import AppDispatcher from '../../dispatcher/AppDispatcher';

export default class Project extends Component {

  componentWillMount() {
    this._getPageData();
  }

  componentDidMount() {
    const data = this.props.data;
    const pageTitle = (data.page) ? data.page.name : 'Page Not Found';
    document.title = config.site.title + ' | ' + pageTitle;
  }

  _getPageData() {
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
        <Link to="/projects" className="back no-underline">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175"><path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"/></svg>
          <span className="tooltip underline-hover">Back</span>
        </Link>
        <h1 className="underline-hover">{ project.fields.name }</h1>
        <a href={project.fields.githubUrl} target="_blank" className="github-link">
          <svg height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M296.133 354.174c49.885-5.89 102.942-24.03 102.942-110.192 0-24.49-8.624-44.448-22.67-59.87 2.266-5.89 9.515-28.113-2.734-58.946 0 0-18.138-5.898-60.758 22.67-18.14-4.984-38.09-8.164-56.682-8.164-19.053 0-39.01 3.18-56.697 8.163-43.082-28.567-61.22-22.67-61.22-22.67-12.24 30.834-4.983 53.058-2.718 58.948-14.06 15.42-22.677 35.38-22.677 59.87 0 86.162 53.057 104.3 102.942 110.19-6.344 5.453-12.24 15.874-14.507 30.388-12.702 5.44-45.808 15.874-65.758-18.59 0 0-11.795-21.31-34.012-22.67 0 0-22.224-.453-1.813 13.592 0 0 14.96 6.812 24.943 32.653 0 0 13.6 43.09 76.18 29.48v38.543c0 5.906-4.53 12.702-15.866 10.89C96.14 438.978 32.2 354.626 32.2 255.77c0-123.807 100.216-224.022 224.03-224.022 123.347 0 224.023 100.216 223.57 224.022 0 98.856-63.946 182.754-152.828 212.688-11.342 2.266-15.873-4.53-15.873-10.89V395.45c0-20.873-6.812-34.465-14.967-41.276zM512 256.23C512 114.73 397.263 0 256.23 0 114.73 0 0 114.73 0 256.23 0 397.263 114.73 512 256.23 512 397.263 512 512 397.263 512 256.23z" fill="#0D2636" fill-rule="evenodd"/></svg>
          <span>See on GitHub</span>
        </a>
        <div className="description" dangerouslySetInnerHTML={ {__html: md.render(project.fields.description) } }></div>
        <h3 className="underline-hover">Demo</h3>
        <div className="pen" dangerouslySetInnerHTML={ {__html: project.fields.embededCodepen } }></div>
      </div>
    );
  }
}
