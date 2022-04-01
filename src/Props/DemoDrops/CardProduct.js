import React, { Component } from 'react'

export default class CardProduct extends Component {
  render() {
      //this.props là thuộc tính có sẵn của components để nhận giá trị từ components cha truyền vào.
      //this.props không thể gán lại giá trị (read only)
      let {product} = this.props;
    return (
      <div className='card'>
          <img src ={product.img} alt = '...' />
          <div className='card-body'>
              <p>{product.name} </p>
              <p>{product.price}</p>
              <button className='btn btn-success'>Đặt mua</button>
          </div>
      </div>
    )
  }
}
