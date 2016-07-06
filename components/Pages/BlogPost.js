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
    const pageTitle = (data.page) ? data.page.title : 'Page Not Found';
    document.title = config.site.title + ' | ' + pageTitle;
  }

  _getPageData(){
    AppDispatcher.dispatch({
      action: 'get-page-data',
      page_slug: 'blog',
      post_slug: this.props.params.slug
    });
  }

  render() {

    const post = this.props.data.page;

    if (!post.fields) {
      return(
        <NoMatch />
      );
    }

    let md = new Remarkable();

    return (
      <div id="main-content" className="blog-post">
        <Link to="/blog">&lt;&lt; Back to Blog</Link>
        <h2>{ post.fields.title }</h2>
        <div dangerouslySetInnerHTML={ {__html: md.render(post.fields.body) } }></div>
      </div>
    );
  }
}
