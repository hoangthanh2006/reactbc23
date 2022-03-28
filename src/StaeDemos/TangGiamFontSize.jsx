import React, { Component } from 'react'

export default class TangGiamFontSize extends Component {
  
  state = {
      fSize: 15 //fontsize là number

  }
  chanceFontSize = (newFsize) =>{
      this.setState ({
          fSize : this.state.fSize + newFsize
      })
  }
  
    render() {

    return (
        <div className='container'>
      <h3>Bài tập tăng giảm Font Size</h3>
      <p style={{fontSize:`${this.state.fSize}px`}}>Học lập trình</p>
      <button className='btn btn-primary' onClick={() => {
          this.chanceFontSize(5);
      }}>+</button>
      <button className='btn btn-primary ml-2' onClick={() =>{
          this.chanceFontSize(-5);
      }}>-</button>
      
      </div>
    )
  }
}
