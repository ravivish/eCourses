import React from "react";
// import './Modal.css';
import "./Banner.css";

const Banner = (props) => (
    <React.Fragment>
        <div className="Banner">
            <img alt="banner" className="img-banner" src={process.env.PUBLIC_URL + '/images/banner.jpg'}/>
            {/* <div className={classes.sampleText}>Hello again</div> */}
        </div>
    </React.Fragment>
);

export default Banner;
