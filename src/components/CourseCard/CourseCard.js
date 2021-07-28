import React from "react";
import { Link } from "react-router-dom";
import "./CourseCard.css";

const CourseCard = (props) => (
  <Link to={`/courses/${props.id}`} className="cart">
    <React.Fragment>
      <img alt="courseimage" src={props.imgurl} />
      <p>{props.title}</p>
      <p>{props.headline}</p>
    </React.Fragment>
  </Link>
);

export default CourseCard;
