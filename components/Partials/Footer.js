import React, { Component } from 'react';

export default class Footer extends Component {

  render(){

    const data = this.props.data;
    const footer_items = data.globals.footer_items;
    let footerClass = '';

    // Prevent initial null
    if (!footer_items) {
      return (<li>No footer items</li>);
    }

    if (data.isContactOpen) {
      footerClass = 'open';
    }

    let footer_markup = footer_items.map(footer_item => {
      let slug = footer_item.service.toLowerCase();
      return (
        <li key={ `key-${slug}` }>
          <a href={footer_item.url} target="_blank" className={ `footer-item ${slug}` }>
            { footer_item.service }
          </a>
        </li>
      );
    });

    return (
      <footer className={ footerClass }>
        <h4 className="footer-title">- around the web</h4>
        <ul>
          { footer_markup }
        </ul>
      </footer>
    )
  }
}
