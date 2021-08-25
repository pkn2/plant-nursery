import React from "react";
import "../Styles/Flipcard.css";
import Forest from "../image/images.jpeg";
import { BsBag, BsPlus } from "react-icons/bs";

class Flipcard extends React.Component {
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
        {rotate == false ? (
          <div
            className="flipcard"
            onTouchStart={this.handleButtonPress}
            onTouchEnd={this.handleButtonRelease}
            onMouseDown={this.handleButtonPress}
            onMouseUp={this.handleButtonRelease}
            onMouseLeave={this.handleButtonRelease}
          >
            <div>
              <img src={Forest} alt="Avatar" className="card_img" />

              <div className="text_box">
                <span className="ipcard-text" style={{ textAlign: "center" }}>
                  Astrophytum{" "}
                  <span style={{ color: "green" }}>Lorem Ipsum</span>
                </span>
                <p className="ipcard-text">has been</p>

                <div className="nd_text">
                  The species of the genus Astrophytum usually grow
                </div>

                <button className="add_btn">
                  <BsBag style={{ padding: "0px 10px 0px 0px" }} />
                  ADD
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="flipcard_big"
            onTouchStart={this.handleButtonPress}
            onTouchEnd={this.handleButtonRelease}
            onMouseDown={this.handleButtonPress}
            onMouseUp={this.handleButtonRelease}
            onMouseLeave={this.handleButtonRelease}
          >
            <div
              style={{
                width: "22%",
                height: "20%",
                display: "inline-block",
                background: "green",
                borderRadius: "30px",
              }}
            >
              <div>
                <BsPlus className="remind_latter" />
                <span className="remind_text">remind latter</span>
              </div>

              <div>
                <BsPlus className="dis" />
                <span className="dis_text">dismiss now</span>
              </div>
            </div>
            <div
              style={{
                width: "78%",
                display: "inline-block",
                height: "100%",
                borderRadius: "30px",
                background: "#f1f4fb",
              }}
            >
              <img src={Forest} alt="Avatar" className="card_img" />

              <div className="text_box">
                <span className="ipcard-text" style={{ textAlign: "center" }}>
                  Astrophytum{" "}
                  <span style={{ color: "green" }}>Lorem Ipsum</span>
                </span>
                <p className="ipcard-text">has been</p>

                <div className="nd_text">
                  The species of the genus Astrophytum usually grow
                </div>

                <button className="add_btn">
                  <BsBag style={{ padding: "0px 10px 0px 0px" }} />
                  ADD
                </button>
              </div>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}
export default Flipcard;
