import React, { Component } from 'react'

export default class RenderArray extends Component {
  carProduc = [
      {id:1, name: 'black-car', img:`./img/products/black-car.jpg`, price: 5000},
      {id:2, name: 'red-car', img:`./img/products/red-car.jpg`, price: 6000},
      {id:3, name: 'siver-car', img:`./img/products/steel-car.jpg`, price: 7000}

      
  ]
  renderCarProduct = () => {
      let result = [];
      for (let product of this.carProduc){
          let tr = <tr key = {product.id}>
                {/* <td>{carProduc.id}</td>
                <td>{carProduc.name}</td>
                <td>{carProduc.img}</td>
                <td>{carProduc.price}</td> */}
          </tr>
      }

  }
  
    render() {
    return (
      <div className='container'>
          <h3>Bang danh sach xe</h3>
          <div className='table'>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>img</th>
                      <th>Price</th>
                      <th></th>
                  </tr>
              </thead>
              <tbody>

              </tbody>
          </div>
      </div>
    )
  }
}
