import React, { Component } from 'react'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import Sidebar from './Sidebar'

export default class BTLayout extends Component {
  render() {
    return (
      <div className='container-fluid'>
          <div className='row'>
              <div className='col-12'>
                 <div><Header /></div> 
                 <div className='row'>
                 <div className='col-4 '> <Sidebar /></div>
                 <div className='col-8 '><Content /></div>
                 </div>
                
                  
                  <Footer />
              </div>
              
          </div>
      </div>
    )
  }
}
