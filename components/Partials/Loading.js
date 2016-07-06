// Loading.js
import React, { Component } from 'react'

export default class Loading extends Component {

  render(){
    return (
      <div className="loader">
        <div className="dot one"></div>
        <div className="dot two"></div>
        <div className="dot three"></div>
      </div>
    )
  }
}
