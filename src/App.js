import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart/Cart";
import Wish from "./components/WishList/Wish";
import Default from "./components/Default";
import Modal from "./components/Modal";
import CreditCardModal from "./components/Cart/CreditCardModal";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/wish" component={Wish} />
          <Route component={Default} />
        </Switch>
        <Modal />
        <CreditCardModal />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
