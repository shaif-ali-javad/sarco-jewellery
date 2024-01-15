import React from "react";
import "./call.css"; // Import the CSS file with the styles

class Call extends React.Component {
  render() {
    return (
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <img
          src={require("../../img/phone-icon.png")}
          className="bending-image"
          alt=""
        />
      </div>
    );
  }
}

export default Call;
