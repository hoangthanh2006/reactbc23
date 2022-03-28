import React, { Component } from 'react'
// import './Stle.css'
//Import modul css
import Style from './Style.css';
export default class StyleComponet extends Component {
  render() {
    return (
      <div>
          <h3>StyleComponet</h3>
          <p className='text-red'>Hello Thanh</p>
          <p className={`p-5 ${Style['text-red']} bg-dark`}>Hello</p>
          </div>
    )
  }
}
