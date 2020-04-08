import React, { Component } from "react";
import Product from "./Product";
import Title from "./functional/Title";
import { ProductConsumer } from "./functional/context";
import Banner from "./Banner";
class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        <Banner />
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
