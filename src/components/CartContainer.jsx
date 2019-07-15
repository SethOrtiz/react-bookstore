import React from "react";
import CartItem from "./CartItem";

class CartContainer extends React.Component {
  render() {
    let cartElements = this.props.cartItemsList.map(product => {
      return (
        <CartItem
          key={product.id}
          title={product.title}
          price={product.price} 
          removeFromCart={this.props.removeFromCart}
          {...product}
        />
      );
    });
    return (
      <div className="container">
        <h1 className="title">Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-2">Price</div>
              <div className="col-md-10">Title</div>

            </div>
          </div>
          {cartElements}
          Total Price = {(this.props.cartTotal).toLocaleString("en-US", {style:"currency", currency:"USD"})}
        </div>
      </div>
    );
  } 
}

export default CartContainer;

