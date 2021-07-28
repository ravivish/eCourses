import React, { Component } from "react";
import ListProduct from "./components/ListCourses/Courses";
import Header from "./components/header/header";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment> 
        <Header />
        <ListProduct />
      </React.Fragment>
    );
  }
}
export default App;
