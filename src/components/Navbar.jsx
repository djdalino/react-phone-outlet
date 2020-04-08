import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../mobile.png";
//import styled from "styled-components";
import { MyCartButton, NavWrapper } from "./StyledComponent";
class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-md navbar-expand-sm navbar-light px-sm-5">
        <div className="container">
          {/*https://www.iconfinder.com/icons/1243689/call_phone_icon Creative
        Commons (Attribution 3.0 Unported);
      https://www.iconfinder.com/Makoto_msk */}
          <Link to="/">
            <img
              src={logo}
              alt="Home"
              className="navbar-brand logo App-logo"
              width="50"
            />
          </Link>
          <ul className="navbar-nav align-items-center">
            <li className="nav-item ml-5">
              <Link to="/" className="nav-link ">
                Products
              </Link>
            </li>
          </ul>
          <Link to="/cart" className="ml-auto">
            <MyCartButton>
              <span className="mr-2">
                <i className="fas fa-cart-plus"></i>
              </span>
              my cart
            </MyCartButton>
          </Link>
        </div>
      </NavWrapper>
    );
  }
}

export default Navbar;
