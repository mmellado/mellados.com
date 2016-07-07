import React, { Component } from 'react'
import { Link } from 'react-router'
import _ from 'lodash'
import config from '../../config'


// Dispatcher
import AppDispatcher from '../../dispatcher/AppDispatcher'

export default class Blog extends Component {

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
      page_slug: 'blog',
      post_slug: this.props.params.slug
    });
  }

  _getMoreArticles() {
    console.log('getting more articles')
    AppDispatcher.dispatch({
      action: 'get-more-items'
    });
  }

  render(){
    const data = this.props.data;

    let num_items = data.displayed_items;
    let blogPosts = data.blog;

    let load_more;
    let show_more_text = 'Show More';

    if (data.loading) {
      show_more_text = 'Loading...';
    }

    if (blogPosts && num_items <= blogPosts.length) {
      load_more = (
        <div>
          <button className="btn btn-default center-block" onClick={ this._getMoreArticles }>
            { show_more_text }
          </button>
        </div>
      );
    }

    blogPosts = _.take(blogPosts, num_items);

    console.log(blogPosts)

    let blog_html = blogPosts.map((blogPost) => {
      let dateObj = new Date(blogPost.sys.createdAt);
      let created = (dateObj.getMonth() + 1) + '/' + dateObj.getDate() + '/' + dateObj.getFullYear();
      return (
        <li key={ 'key-' + blogPost.sys.id }>
          <h2 className="post-title pointer">
            <Link to={ '/blog/' + blogPost.slug } onClick={ this.scrollTop }>{ blogPost.fields.title }</Link> <span>{ created }</span>
          </h2>
        </li>
      )
    });

    return (
      <div id="main-content" className="blog">
        <ul>
          { blog_html }
        </ul>
        { load_more }
      </div>
    );
  }
}
