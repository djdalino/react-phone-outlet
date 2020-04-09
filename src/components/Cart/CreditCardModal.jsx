import React from "react";
import Cards from "react-credit-cards";
import { ModalContainer } from "../StyledComponent";
import { ProductConsumer } from "../functional/context";
import "react-credit-cards/es/styles-compiled.css";
export default class CreditCardModal extends React.Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            number,
            name,
            expiry,
            cvc,
            focus,
            inputChange,
            inputFocus,
            ccModalOpen,
            ccModalClose,
          } = value;
          if (!ccModalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div
                  id="modal"
                  className="col-10 mx-auto col-md-7 col-lg-4 text-center text-capitalize py-5"
                >
                  <div id="PaymentForm">
                    <Cards
                      cvc={cvc}
                      expiry={expiry}
                      focus={focus}
                      name={name}
                      number={number}
                    />
                    <form>
                      <div className="form-group mt-4">
                        <input
                          className="form-control"
                          type="tel"
                          name="number"
                          placeholder="Card Number"
                          value={number}
                          onChange={inputChange}
                          onFocus={inputFocus}
                        />
                      </div>
                      <div className="form-group center">
                        <input
                          className="form-control"
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={name}
                          onChange={inputChange}
                          onFocus={inputFocus}
                        />
                      </div>
                      <div className="row">
                        <div className="col">
                          <input
                            className="form-control"
                            type="text"
                            name="expiry"
                            placeholder="MM/YY expiry"
                            value={expiry}
                            onChange={inputChange}
                            onFocus={inputFocus}
                          />
                        </div>
                        <div className="col">
                          <input
                            className="form-control"
                            type="tel"
                            name="cvc"
                            placeholder="cvc"
                            value={cvc}
                            onChange={inputChange}
                            onFocus={inputFocus}
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="btn btn-primary btn-darkblue mt-3 mr-2"
                      >
                        Submit
                      </button>
                      <button
                        type="submit"
                        className="btn btn-danger mt-3"
                        onClick={() => ccModalClose()}
                      >
                        Close
                      </button>
                    </form>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
