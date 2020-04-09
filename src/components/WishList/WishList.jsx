import React from "react";
import WishListItem from "./WishListItem";
function WishList({ value }) {
  const { wishList } = value;
  return (
    <div className="container vh-70 mt-10">
      {wishList.map((item) => {
        return <WishListItem key={item.id} item={item} value={value} />;
      })}
    </div>
  );
}

export default WishList;
