import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
      //Phân biệt state và props
      /*
        - Giống nhau: đây là 2 thuộc tính có sẵn của react class components để binđing dữ liệu lên giao diện (html)
        - Khác nhau:
        + State dùng để chứa dữ liệu thay đổi trên giao diện từ 1 event (1 xử lý từ người dùng). State có thể gán lại giá trị thông qua phương thức this.setState
        + props là thuộc tính chứa giá trị từ cpmponent cha truyền vào. this.props không thể thay đổi giá trị (read only)

      */

    let {prod} = this.props;
    return (
      <div className='card'>
          <img src={prod.image} alt ="..." className='w-100' />
          <div className='card-body'>
              <p>{prod.name}</p>
              <p>{prod.price} </p>
              <button className='bg-dark text-white btn'>+ Add to card</button> 
          </div>
      </div>
    )
  }
}
