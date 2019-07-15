import React from "react";
import BookContainer from "./BookContainer";
import CartContainer from "./CartContainer";
import "../App.css";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.searchedBooks = []
    this.searchBooks = this.searchBooks.bind(this);
    this.searchBy = true;
    this.searchOptions = this.searchOptions.bind(this);
    this.sortByTitle = this.sortByTitle.bind(this);
    this.sortByAuthor = this.sortByAuthor.bind(this);
  }
  componentDidMount = async () => {
    try {
      const res = await fetch("http://localhost:8082/api/books");
      if (!res.ok) throw new Error();
      const products = await res.json();
      this.searchedBooks= products;
      this.setState({
        products: products,
      });
      
    } catch (e) {
      alert(e);
    }
  };

  addItemToCart = id => {
    this.setState(prevState => {
      return {
        products: prevState.products.map(product => {
          if (product.id === id) {
            return {
              ...product,
              inCart: true
            };
          } else {
            return product;
          }
        })
      };
    });
  };

  removeFromCart = id => {
    this.setState(prevState => {
      return {
        products: prevState.products.map(product => {
          if (product.id === id) {
            return {
              ...product,
              inCart: false
            };
          } else {
            return product;
          }
        })
      };
    });
  };

  searchBooks(e) {
    this.searchedBooks = this.state.products;
    let searchValue = e.target === undefined ? e : e.target.value;
    if (this.searchBy) {
      this.searchedBooks = this.searchedBooks.filter(
        book => book.title.toLowerCase().includes(searchValue) === true
      );
    } else {
      this.searchedBooks = this.searchedBooks.filter(
        book => book.author.toLowerCase().includes(searchValue) === true
      );
    }

    this.setState({
      products: this.state.products
    });
  }



  searchOptions(e) {
    if (e.target.checked) {
      this.searchBy = false;
    } else {
      this.searchBy = true;
    }
  }

  sortByTitle(e) {
    e.preventDefault();
    this.searchedBooks = this.searchedBooks.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    this.setState({
      products: this.state.products
    });
  }

  sortByAuthor(e) {
    e.preventDefault();
    this.searchedBooks = this.searchedBooks.sort((a, b) =>
      a.author.localeCompare(b.author)
    );
    this.setState({
      products: this.state.products
    });
  }

  render() {
    const cartItemsList = this.state.products.filter(product => product.inCart === true);
    const cartTotal = cartItemsList.reduce(
      (accumlator, currentValue) => accumlator + currentValue.price,0);
    return (
      <div id="mainContainer" className="container-fluid">
        <div className="row">
          <div id="BookContainer" className="col-lg-8">
            <BookContainer
              product={this.searchedBooks}
              addItemToCart={this.addItemToCart}
              searchBooks={this.searchBooks}
              searchOptions={this.searchOptions}
              sortByTitle={this.sortByTitle}
              sortByAuthor={this.sortByAuthor}
            />
          </div>
          <div id="cartContainer" className="col-lg-4">
            <CartContainer
              cartTotal={cartTotal}
              cartItemsList={cartItemsList}
              removeFromCart={this.removeFromCart}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
