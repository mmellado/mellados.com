import React, { Component } from 'react';
import { Link } from 'react-router';
import config from '../../config';


// Dispatcher
import AppDispatcher from '../../dispatcher/AppDispatcher';


export default class Contact extends Component {

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
      page_slug: 'contact'
    });
  }

  render(){
    const data = this.props.data;
    const social_items = data.globals.footer_items;

    let social_icons = social_items.map(social_item => {
      let slug = social_item.service.toLowerCase();
      return (
        <li key={ `key-${slug}` }>
          <a href={social_item.url} target="_blank" className={slug}>
            <span dangerouslySetInnerHTML={ {__html: social_item.icon } }></span>
          </a>
        </li>
      );
    });

    return (
      <div id="main-content" className="contact">
        <div className="wrapper">
          <ul className="questions">
            <li>Want to get in touch?</li>
            <li>Want to work together?</li>
            <li>Love this website?</li>
            <li>Hate this website?</li>
            <li>Know a good joke?</li>
          </ul>
          <p>You can reach out using one of this internet thingys</p>
          <ul className="social_links">
            {social_icons}
          </ul>
        </div>
      </div>
    );
  }
}
