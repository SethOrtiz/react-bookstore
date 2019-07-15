import React from "react";

function CartItem({ id, title, price, removeFromCart }) {
  const clickHandler = () => {
    removeFromCart(id);
  };
  return (
    <div className="collection-item list-group-item">
      <div className="row cart">
        <div className="col-md-2">{price.toLocaleString("en-US", {style:"currency", currency:"USD"})}</div>
        <div className="col-md-8">{title}</div>
        <div className="col-md-2">
          <button
            id="remove"
            onClick={clickHandler}
            type="submit"
            className="btn"
          >
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
