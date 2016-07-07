// Default.js
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

    // Updated
    const page = data.page;
    const page_slug = this._getSlug();
    if (page.slug !== page_slug) {
      this._getPageData(page_slug);
    }
  }

  _getSlug() {
    return this.props.location.pathname.replace('/','');
  }

  _getPageData() {
    const page_slug = this._getSlug();
    AppDispatcher.dispatch({
      action: 'get-page-data',
      page_slug: page_slug
    });
  }

  _scrollTop() {
    $('html, body').scrollTop(0);
  }

  render(){

    const slug = this._getSlug();
    const galleryItems = this.props.data[slug];

    let main_content = galleryItems.map((item, i) => {

      let thumbnail = '';
      if (item.fields.thumbnail && item.fields.thumbnail.fields) {
        thumbnail = (<img src={item.fields.thumbnail.fields.file.url} alt={item.fields.name} />);
      }

      return (
        <li key={`key-${item.sys.id}`}>
          <Link to={`/${slug}/${item.slug}`} onClick={ this._scrollTop }>
            { thumbnail }
            <p className="title">{item.fields.name}</p>
          </Link>
        </li>
      );
    })

    return (
      <div id="main-content" className={`gallery ${slug}`}>
        <ul>
          { main_content }
        </ul>
      </div>
    )
  }
}
