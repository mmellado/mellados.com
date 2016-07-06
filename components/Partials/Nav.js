// Nav.js
import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component {

  handleClick(){
    $('.navbar-collapse').removeClass('in')
    $('html, body').scrollTop(0)
  }

  render(){

    const data = this.props.data;
    const nav_items = data.globals.nav_items;

    // Prevent initial null
    if(!nav_items){
      return <div>No nav items</div>
    }

    const menu_items = nav_items.map(( nav_item ) => {
      return (
        <li key={ 'key-' + nav_item.value }>
          <Link onClick={ this.handleClick } to={ '/' + nav_item.value }>{ nav_item.title }</Link>
        </li>
      )
    })

    return (
      <nav>
        <div className="wrapper">
          <Link onClick={ this.handleClick } to={'/'}>Marcos Mellado</Link>
          <ul>
            { menu_items }
          </ul>
        </div>
      </nav>
    )
  }
}
