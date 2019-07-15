import React from "react";
import Book from "./Book";
import SearchBooks from "./SearchBooks";

class BookContainer extends React.Component {
  render() {
    let Books = this.props.product.map(product => {
      return (
        <Book
          key={product.id}
          product={product}
          price={product.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })}
          addItemToCart={this.props.addItemToCart}
        />
      );
    });
    return (
      <div className="container">
        <h1>Books</h1>
        <div className="list-group">
          <SearchBooks
            searchBooks={this.props.searchBooks}
            searchOptions={this.props.searchOptions}
            sortByTitle={this.props.sortByTitle}
            sortByAuthor={this.props.sortByAuthor}
          />
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-6">Title</div>
              <div className="col-md-3">Author</div>
              <div className="col-md-3">Price</div>
            </div>
          </div>
          {Books}
        </div>
      </div>
    );
  }
}

export default BookContainer;
