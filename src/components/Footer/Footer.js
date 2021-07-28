import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
  constructor(props) {
    super(props);
    // this.state = { course: {}, loading: true };
    console.log(props.match.params.id);
  }
  
  render() {
    return (
        <div className="footer-links">
          <div className="first-col link-columns">
            
          </div>            
          <div className="second-col link-columns">
          </div>            
          <div className="third-col link-columns">
          </div>            
          <div className="fourth-col link-columns">
          </div>            
        </div>
    );
  }
}

export default Footer;
