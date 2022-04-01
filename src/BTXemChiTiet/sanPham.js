import React, { Component } from 'react'

export default class sanPham extends Component {
  render() {
      let {prod} = this.props;
    return (
       
        <div className="card">
          <img src={prod.img} height={300} />
          <div className="card-body">
            <p>Ten San Pham</p>
            <p>Gia ban</p>
            <button className="btn btn-success">Xem chi tiết</button>
          </div>
        </div>
     
    )
  }
}
