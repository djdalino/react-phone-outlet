import React from "react";

function WishListItem({ item, value }) {
  const { id, title, img, company, price } = item;
  const { addToCart, handleRemoveToWishList } = value;
  return (
    <div className="row my-3 text-capitalize text-center ">
      <div className="col-10 mx-auto col-lg-2">
        <img
          src={img}
          style={{ width: "5rems", height: "5rem" }}
          alt="Cart Item"
          className="img-fluid"
        />
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none text-capitalize">product: </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none text-capitalize">price: </span>
        {company}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none text-capitalize">company: </span>
        {price}
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <div className="wish-icon" onClick={() => addToCart(id)}>
          <i className="fas fa-cart-plus"></i>
        </div>
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <div className="cart-icon" onClick={() => handleRemoveToWishList(id)}>
          <i className="fas fa-trash"></i>
        </div>
      </div>
    </div>
  );
}

export default WishListItem;
