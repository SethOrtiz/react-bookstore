import React from "react";


function Book({ product, price, addItemToCart, id}){
  const clickHandler = () => {
    addItemToCart(product.id);
  };
  return (
    <div className="collection-item list-group-item">
      <div className="row cart">
        <div className="col-md-6" >
          <a href={product.website}>{product.title}</a>
          <div className="subtitle">{product.subtitle}</div>
        </div>
        <div className="col-md-3">{product.author}</div>
        <div className="col-md-1">{price}</div>
        <div className="col-md-2">
          <button  onClick={clickHandler} ontype="submit" className="btn btn-primary">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Book;
