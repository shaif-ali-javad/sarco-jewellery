import React, { Component } from "react";
import Navbar from "./for-all-component/navbar/navbar";
import Contact from "./contact-component/contact";
import Footer from "./for-all-component/footer/footer";
// import Slider from "./contact/slider/slider";

export class contact extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <Slider /> */}
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default contact;
