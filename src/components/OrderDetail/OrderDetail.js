import React, { Component } from "react";
import Header from "../header/header";
import "./OrderDetail.css";

class OrderDetail extends Component {
  constructor(props) {
    super(props);
    // this.state = { course: {}, loading: true };
    console.log(props.match.params.id);
  }
  componentDidMount() {
    fetch(`/api/ordersdetails`)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          this.setState({ course: res, loading: false });
          // console.log(this.state);
        }
      }) 
      .catch((err) => console.log(err));
  }
  
  render() {
    return (
      <React.Fragment>
        <Header />
        {this.state.loading ? null : this.getData()}
      </React.Fragment>
    );
  }
}

export default OrderDetail;
