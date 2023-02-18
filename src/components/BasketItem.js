import React from "react";

function BasketItem({ item, product }) {
  return (
    <>
      <li className="basket-item">
        {product.title} X <span>{item.amount}</span>
      </li>
    </>
  );
}

export default BasketItem;
