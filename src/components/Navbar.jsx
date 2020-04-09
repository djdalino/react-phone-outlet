import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../mobile.png";
//import styled from "styled-components";
import { ProductConsumer } from "./functional/context";
import { MyCartButton, NavWrapper } from "./StyledComponent";
class Navbar extends Component {
  state = {
    navbar: "",
  };
  componentDidMount() {
    this.changeNavBar();
  }
  changeNavBar = () => {
    window.addEventListener("scroll", () => {
      let windowHeight = window.scrollY;
      if (windowHeight > 50) {
        this.setState(() => {
          return { navbar: true };
        });
      } else {
        this.setState(() => {
          return { navbar: false };
        });
      }
    });
  };
  render() {
    const { navbar } = this.state;
    return (
      <NavWrapper
        navbar={navbar}
        className={`navbar fixed-top navbar-expand-md navbar-expand-sm navbar-transparent px-sm-5`}
      >
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
          <div className="ml-auto">
            <ProductConsumer>
              {(value) => {
                const { cart, wishList } = value;
                return (
                  <React.Fragment>
                    <Link to="/cart">
                      <MyCartButton
                        navbar={navbar}
                        data-toggle="tooltip"
                        title="Cart!"
                      >
                        <span className="mr-2">
                          <i className="fas fa-cart-plus"></i>
                        </span>
                        ({cart.length})
                      </MyCartButton>
                    </Link>
                    <Link to="/wish" className="ml-auto">
                      <MyCartButton
                        navbar={navbar}
                        data-toggle="tooltip"
                        title="Wish list!"
                      >
                        <span className="mr-2">
                          <i className="fas fa-heart"></i>
                        </span>
                        ({wishList.length})
                      </MyCartButton>
                    </Link>
                  </React.Fragment>
                );
              }}
            </ProductConsumer>
          </div>
        </div>
      </NavWrapper>
    );
  }
}

export default Navbar;
