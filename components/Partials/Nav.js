// Nav.js
import React, { Component } from 'react'
import { Link } from 'react-router'

import AppDispatcher from '../../dispatcher/AppDispatcher';

export default class Nav extends Component {

  _handleClick() {
    $('html, body').scrollTop(0);
    this._updateNavStatus();
  }

  _handleLogoClick() {
    $('html, body').scrollTop(0);
    if (this.props.data.isNavOpen) {
      this._updateNavStatus();
    }
  }

  _updateNavStatus() {
    $('#js-body').toggleClass('open-nav');
    AppDispatcher.dispatch({
      action: 'update-nav-status'
    });
  }

  render(){

    const data = this.props.data;
    const nav_items = data.globals.nav_items;
    let navClass = '';

    // Prevent initial null
    if (!nav_items) {
      return (<li>No nav items</li>);
    }

    if (data.isNavOpen) {
      navClass = 'open';
    }

    const menu_items = nav_items.map(nav_item => {
      return (
        <li key={ 'key-' + nav_item.value }>
          <Link onClick={ this._handleClick.bind(this) } to={ '/' + nav_item.value }>{ nav_item.title }</Link>
        </li>
      )
    });

    return (
      <nav className={navClass}>
        <Link onClick={ this._handleLogoClick.bind(this) } className="logo" to={'/'}>Marcos Mellado</Link>
        <div className="wrapper">
          <button className="menu-toggle" onClick={ this._updateNavStatus }>
            + menu
          </button>
          <ul>
            { menu_items }
          </ul>
        </div>
      </nav>
    )
  }
}
