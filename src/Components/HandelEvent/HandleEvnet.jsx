import React, { Component } from 'react'

export default class HandleEvnet extends Component {
showMess = () => {
    alert('Hello')
}

  render() {
    return (
      <div className='container'>
          <button className='btn btn-success' onClick = {this.showMess}>Click me</button>
      </div>
    )
  }
}
