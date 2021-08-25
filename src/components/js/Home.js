import React from "react";
import "../Styles/Home.css";
import Flip_card from "./Flipcard";
import Small_card from "./Small display Card";
import Small_card_display from "./Small card";
import { FaBars } from "react-icons/fa";
import { BsBag, BsSearch, BsPlus } from "react-icons/bs";
import { FiFilter } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";
import Forest from "../image/images.jpeg";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "60%",
    left: "50%",
    right: "auto",
    bottom: "0",
    marginRight: "-50%",
    width: "90%",
    transform: "translate(-50%, -0%)",
  },
};

class Home extends React.Component {
  constructor() {
    super();
    this.state = { modalIsOpen: false };
  }

  longPressStart = () => {
    console.log("Long press Started");
  };

  longPressEnd = () => {
    console.log("Long press Ends");
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div style={{ zIndex: "9999" }}>
            <FaBars className="bar" />

            <BsSearch className="search" />

            <div className="bag">
              <BsBag />
              <p className="bagnum">3</p>
            </div>
          </div>
          <div ontouch className="cont">
            <div className="ipcard_cont">
              <Flip_card />
              <Flip_card />
            </div>

            <div className="small_display_card_box">
              <Small_card />
              <Small_card />
            </div>

            <div className="small_display_card_box_not_scroll">
              <Small_card_display />
              <Small_card_display />
            </div>

            <div style={{ marginTop: "25px", marginBottom: "60px" }}>
              <Tabs
                activeTab="1"
                className="mt-5"
                ulClassName=""
                activityClassName="bg-success"
                onClick={(event, tab) => console.log(event, tab)}
              >
                <Tab title="Concept" className="mr-3">
                  <div className="mt-3 contt">
                    <div className="item">
                      <div className="contbox">
                        <p className="item_header">Gasteria Kyoryu</p>
                        <p className="item_sec_header">w 300 × h 310 mm</p>

                        <div className="item_pic_cont">
                          <img src={Forest} alt="Avatar" className="item_pic" />
                        </div>

                        <p className="money">$228.00</p>

                        <div className="plus">
                          <BsPlus />
                        </div>
                      </div>

                      <div className="contbox">
                        <p className="item_header">Gasteria Kyoryu</p>
                        <p className="item_sec_header">w 300 × h 310 mm</p>

                        <div className="item_pic_cont">
                          <img src={Forest} alt="Avatar" className="item_pic" />
                        </div>

                        <p className="money">$228.00</p>

                        <div className="plus">
                          <BsPlus />
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab>

                <Tab title="Populer" className="mr-3">
                  <div className="mt-3">Popler</div>
                </Tab>
              </Tabs>
            </div>

            <div className="filter" onClick={this.openModal}>
              <FiFilter />
            </div>
          </div>

          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div style={{ marginTop: "18px" }}>
              <span style={{ fontSize: "24px", fontWeight: "700" }}>
                FILTERS
              </span>

              <ImCross onClick={this.closeModal} style={{ float: "right" }} />

              <div className="btn_flex">
                <button className="btn_new">INDOOR</button>
                <button className="btn_new">OUTDOOR</button>
                <button className="btn_new">GARDEN</button>
              </div>

              <div
                style={{
                  border: "solid 1px red",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <label for="vol">Price Range</label>
                <br />
                <input
                  style={{ width: "100%" }}
                  type="range"
                  id="vol"
                  name="vol"
                  min="0"
                  max="50"
                ></input>
              </div>

              <div
                style={{
                  marginTop: "15px",
                  border: "solid 1px red",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <BsBag className="water" />
                <BsBag className="water" style={{ background: "green" }} />
                <BsBag className="water" />
              </div>
            </div>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
