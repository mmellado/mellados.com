// Footer.js
import React, { Component } from 'react'

export default class Footer extends Component {

  render(){

    const data = this.props.data
    let footer_text
    if(data.globals.text){
      footer_text = data.globals.text.footer_text
    }

    let twitter
    let facebook
    let github
    if(data.globals.social){
      twitter = data.globals.social.twitter
      facebook = data.globals.social.facebook
      github = data.globals.social.github
    }

    return (
      <footer>
        This is the footer
      </footer>
    )
  }
}
