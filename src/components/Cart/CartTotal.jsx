import React from "react";
import { Link } from "react-router-dom";
function CartTotal({ value }) {
  const { cartSubtotal, cartTax, cartTotal, clearCart, ccOpenModal } = value;
  return (
    <React.Fragment>
      <div className="container vh-50 ">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger text-uppercase mb-3 px-5"
                onClick={() => clearCart()}
              >
                clear
              </button>
            </Link>
            <h5>
              <span className="text-title">subtotal :</span>
              <strong>$ {cartSubtotal}</strong>
            </h5>
            <h5>
              <span className="text-title">tax :</span>
              <strong>$ {cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total :</span>
              <strong>$ {cartTotal}</strong>
            </h5>
            <div
              className="btn px-5 text-center rounded p-1 payment-icon"
              onClick={() => ccOpenModal()}
            >
              <span className="mr-2">
                <i className="fas fa-credit-card App-logo" />
              </span>
              Credit Card
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CartTotal;
