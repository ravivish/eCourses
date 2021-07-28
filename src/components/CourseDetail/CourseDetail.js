import React, { Component } from "react";
import Header from "../header/header";
import "./CourseDetail.css";

class CourseDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { course: {}, loading: true };
    // console.log(props.match.params.id);
  }
  componentDidMount() {
    fetch(`/api/products/${this.props.match.params.id}`)
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          this.setState({ course: res, loading: false });
          // console.log(this.state);
        }
      }) 
      .catch((err) => console.log(err));
  }
  addToCart =() => {
    fetch('/api/cart',{
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'productid' : this.props.match.params.id}),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res) {
          this.setState({ course: res, loading: false });
          console.log(this.state);
        }
      }) 
      .catch((err) => console.log(err));
  }
  getData = () => {
    const course = this.state.course;
    return (
      <div className="Details">
        <div className="Content">
          <p>{course.title}</p>
          <p>{course.headline}</p>
          <p>{course.category}</p>
          <p>{course.price}</p>
          <p>{course.badge}</p>
        </div>
        <div className="Imgdetails">
          <img alt="courseimage" src={course.imgurl} />
          <input onClick={() => this.addToCart()} type="button" className="addtocartbtn" value="Add to cart" />
        </div>
      </div>
    );
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        {this.state.loading ? null : this.getData()}
      </React.Fragment>
    );
  }
}

export default CourseDetail;
