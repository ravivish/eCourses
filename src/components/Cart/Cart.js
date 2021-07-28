import React, { Component } from "react";
import Header from "../header/header";
import "./Cart.css";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { course: [], loading: true, totalprice: 0 };
  }
  componentDidMount() {
    this.fetchCartData();
  }

  fetchCartData = () => {
    fetch(`/api/cart`)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          // let price = 0;
          // res.products.forEach((p) => {
          //   price += p.price;
          // });
          const price = res.products.reduce((sum,e) => {
            return sum += e.price;
          },0)
          this.setState({ course: res, totalprice: price, loading: false });
          console.log(this.state);
        }
      })
      .catch((err) => console.log(err));
  };
  ShowCartItems = () => {
    const cartItems = this.state.course;
    return (
      <div className="cart-container">
        <div className="cart-items">
          {cartItems.products.map((e) => {
            return (
              <li key={e._id} className="cart-list">
                <div className="cart-list-items">
                  <img className="cart-items-thumbnail" src={e.imgurl} alt="product_img" />
                  <p>{e.headline}</p>
                  {/* <p>{e.description}</p> */}
                </div>
              </li>
            );
          })}
        </div>
        <div className="cart-price">
          <p>Total Price</p>
          <p>{this.state.totalprice}</p>
          <input type="button" value="Checkout"/>
        </div>
      </div>
    );
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="cart-title">
          <span>Shopping Cart</span>
        </div>
        <div className="cart-container">
          {!this.state.loading && this.ShowCartItems()}
        </div>
      </React.Fragment>
    );
  }
}

export default Cart;
