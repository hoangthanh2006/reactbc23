import React, { Component } from 'react'

export default class BtChonXe extends Component {
  state = {
      carColor: `./img/products/black-car.jpg`
  }
  chanceCarColor = (newCarColor)=> {
    this.setState ({
          carColor: `./img/products/${newCarColor}-car.jpg`
      })
  }
  
    render() {
    return (
      <div className='container'>
          <h3>Bài tập chọn xe</h3>
          <div className='row'> 
              <div className='col-6'>
                  <img src= {this.state.carColor} alt ='...' className='w-100' ></img>
                 
              </div>
              <div className='col-6'>
                <button className='btn text-white' style={{background:'black'}} onClick={() =>{this.chanceCarColor('black')}}>Black Car</button>
                <button className='btn text-white' style={{background:'red'}} onClick={() =>{this.chanceCarColor('red')}}>red Car</button>
                <button className='btn text-white' style={{background:'silver'}} onClick={() =>{this.chanceCarColor('steel')}}>Steel Car</button>
           
              </div>
          </div>

      </div>
    )
  }
}
{/* <img src='./img/products/red-car.jpg' alt ='...' className='w-100'></img>
<img src='./img/products/steel-car.jpg' alt ='...' className='w-100'></img> */}