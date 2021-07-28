import React, { Component } from "react";
import "./AddProduct.css";
import Header from "../header/header";
import "react-multi-carousel/lib/styles.css";

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleFile = (e) => {
    this.setState({ [e.target.name]: e.target.files[0] });
  };

  addproduct = (e) => {
    console.log(this.state);
    e.preventDefault();
    const formdata = new FormData();
    Object.keys(this.state).map((e) => {
      return formdata.append(e, this.state[e]);
    });
    console.log(formdata);
    fetch("/api/products", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(formdata),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          alert("Successs");
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="test">
          <form className="Form" onSubmit={this.addproduct}>
            <label className="Field">
              <span>Title:</span>
              <input
                type="text"
                placeholder="Enter Product Title"
                name="title"
                className="FormElement"
                onInput={this.handleChange}
              />
            </label>
            <label className="Field">
              <span>Headline:</span>
              <input
                type="text"
                placeholder="Enter Product Headline"
                name="headline"
                className="FormElement"
                onChange={this.handleChange}
              />
            </label>
            <label className="Field">
              <span>Badge:</span>
              <input
                type="text"
                placeholder="Enter Product Badge"
                name="badge"
                className="FormElement"
                onChange={this.handleChange}
              />
            </label>
            <label className="Field">
              <span>Price:</span>
              <input
                type="text"
                placeholder="Enter Product Price"
                name="price"
                className="FormElement"
                onChange={this.handleChange}
              />
            </label>
            <label className="Field">
              <span>thumbnail:</span>
              <input
                type="file"
                name="image"
                className="FormElement"
                accept="image/png, image/jpeg image/jpg"
                onChange={this.handleFile}
              />
            </label>
            <label className="Field">
              <span>Reviews:</span>
              <input
                type="text"
                placeholder="Enter reviews"
                name="reviews"
                className="FormElement"
                onChange={this.handleChange}
              />
            </label>
            <input
              type="submit"
              className="signupbtn"
              // onClick={this.addproduct}
              value="Add"
            />
          </form>
        </div>
      </React.Fragment>
    );
  }
}
export default AddProduct;
