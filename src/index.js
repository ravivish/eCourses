import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import AddProduct from "./components/AddProduct/AddProduct";
import Login from "./components/Login/Login";
import CourseDetail from "./components/CourseDetail/CourseDetail";
import Cart from "./components/Cart/Cart";

function Index() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/add" component={AddProduct} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/courses/:id" component={CourseDetail} />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));
