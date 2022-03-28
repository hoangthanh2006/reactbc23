import React, { Component } from "react";

export default class StateDemo extends Component {
 // State klà thuộc tính có sẵn được kế thừa từ react class component. Dùng để chứa các giá trị thay đổi giao diện người dùng khi người dung thao tác.
 state = {
     login: false
 }
 
    login = false;
  userName = "cyberssoft";
  renderLogin = () => {
      if (this.state.login){
          return <div className="nav-item text-light font-weight-bold">Hello ! {this.userName}</div>
      }
      return <button onClick={() => {
        // let newState = {login: true}
;        this.setState({login: true}, () => {
});
      }} type = 'button' className="btn btn-success">Đăng Nhập</button>
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        />
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">
                  Action 1
                </a>
                <a className="dropdown-item" href="#">
                  Action 2
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
           {this.renderLogin()}
          </form>
          
        </div>
      </nav>
    );
  }
}
