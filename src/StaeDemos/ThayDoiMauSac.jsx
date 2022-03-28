import React, { Component } from 'react'

export default class ThayDoiMauSac extends Component {
  state ={
      colorHome: 'green'
  }
  chanceColorHome = (newColor) => {
    this.setState ({
        colorHome: newColor
    })
  }
    render() {
    return (
      <div className='container'>

          <h3>Thay đổi màu sắc ngôi nhà</h3>
          <i className='fa fa-home' style={{fontSize:150, color:this.state.colorHome}}></i>
          <br />
          <button className='btn btn-success' onClick={() =>{this.chanceColorHome('green')}}>Green</button>
          <button className='btn btn-primary ml-2' onClick={() => {this.chanceColorHome('blue')}}>Blue</button>
          <button className='btn btn-danger ml-2' onClick={() => {this.chanceColorHome('red')}}>Red</button>
      </div>
    )
  }
}
