import React from "react";
import "../Styles/Small card.css";
import Forest from "../image/images.jpeg";

class Small_card_display extends React.Component {
  constructor() {
    super();
    this.handleButtonPress = this.handleButtonPress.bind(this);
    this.handleButtonRelease = this.handleButtonRelease.bind(this);
    this.state = {
      rotate: false,
    };
  }

  handleButtonPress() {
    this.buttonPressTimer = setTimeout(() => {
      this.setState({ rotate: !this.state.rotate });
    }, 1500);
  }

  handleButtonRelease() {
    clearTimeout(this.buttonPressTimer);
  }

  render() {
    const { rotate } = this.state;
    return (
      <React.Fragment>
        <div className="small_card_display">
          <div style={{ width: "100px" }}>
            <img src={Forest} alt="Avatar" className="small_card_img_display" />

            <span className="name_title_display">Small card</span>

            <span className="name_display">Rahul Roy</span>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Small_card_display;
