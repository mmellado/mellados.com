import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import Remarkable from 'remarkable';
import config from '../../config';

// Components
import NoMatch from './NoMatch';

// Dispatcher
import AppDispatcher from '../../dispatcher/AppDispatcher';

export default class BlogPost extends Component {

  componentWillMount() {
    this._getPageData();
  }

  componentDidMount() {
    const data = this.props.data;
    const pageTitle = (data.page) ? data.page.title : 'Page Not Found';
    document.title = config.site.title + ' | ' + pageTitle;

    // Enable code highlighting
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }

  _getPageData(){
    AppDispatcher.dispatch({
      action: 'get-page-data',
      page_slug: 'blog',
      post_slug: this.props.params.slug
    });
  }

  render() {
    const data = this.props.data;
    const post = data.page;

    if (!post.fields) {
      return(
        <NoMatch />
      );
    }

    let md = new Remarkable();
    let dateObj = new Date(post.sys.createdAt);
    let created = (dateObj.getMonth() + 1) + '/' + dateObj.getDate() + '/' + dateObj.getFullYear();
    dateObj = new Date(post.sys.updatedAt);
    let updated = (dateObj.getMonth() + 1) + '/' + dateObj.getDate() + '/' + dateObj.getFullYear();
    let updatedM = (updated != created) ? (<p className="updated">Updated on {updated}</p>) : '';


    return (
      <div id="main-content" className="blog-post">
        <div className="wrapper">
          <Link to="/blog" className="back no-underline">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 477.175 477.175"><path d="M145.188 238.575l215.5-215.5c5.3-5.3 5.3-13.8 0-19.1s-13.8-5.3-19.1 0l-225.1 225.1c-5.3 5.3-5.3 13.8 0 19.1l225.1 225c2.6 2.6 6.1 4 9.5 4s6.9-1.3 9.5-4c5.3-5.3 5.3-13.8 0-19.1l-215.4-215.5z"/></svg>
            <span className="tooltip underline-hover">Back</span>
          </Link>
          <h1 className="post-title"><span className="underline-hover">{ post.fields.title }</span></h1>
          <p className="created">By <Link to={'/'}>Marcos Mellado</Link> on {created}</p>
          {updatedM}
          <div className="post-body" dangerouslySetInnerHTML={ {__html: md.render(post.fields.body) } }></div>
        </div>
      </div>
    );
  }
}
