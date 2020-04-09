import React, { Component } from "react";
import CartColumns from "./CartColumns";
import CartEmpty from "./CartEmpty";
import Title from "../functional/Title.jsx";
import CartList from "./CartList";
import CartTotal from "./CartTotal";
import { ProductConsumer } from "../functional/context";
class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <div className="mt-10">
                  <Title name="your" title="cart" />
                  <CartColumns />
                  <CartList value={value} />
                  <CartTotal value={value} />
                </div>
              );
            } else {
              return <CartEmpty />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Cart;
