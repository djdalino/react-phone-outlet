import React, { Component } from "react";
import Title from "../functional/Title";
import WishColumns from "./WishColumns";
import WishList from "./WishList";
import WishListEmpty from "./WishListEmpty";
import { ProductConsumer } from "../functional/context";
class Wish extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {(value) => {
            const { wishList } = value;
            if (wishList.length > 0) {
              return (
                <div className="mt-10">
                  <Title name="Your" title="Wish List" />
                  <WishColumns />
                  <WishList value={value} />
                </div>
              );
            } else {
              return <WishListEmpty />;
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

export default Wish;
