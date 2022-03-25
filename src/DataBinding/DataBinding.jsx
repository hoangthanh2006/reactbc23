import React, { Component } from 'react'

export default class DataBinding extends Component {
    product = {
        id: 1,
        name: 'Iphone',
        price: 1000,
        img: 'https://i.pravatar.cc?u=77'
    }

  render() {
    let title = 'Cybersoft';


    return (
        <p>{title}</p>
    )
  }
}
