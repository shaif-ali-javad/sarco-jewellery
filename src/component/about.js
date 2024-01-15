import React, { Component } from "react";
import About from "./about-component/about.js";
import Navbar from "./for-all-component/navbar/navbar.js";
import Footer from "./for-all-component/footer/footer.js";

export class about extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <About />
        <Footer />
      </div>
    );
  }
}

export default about;
