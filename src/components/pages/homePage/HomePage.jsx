import "./homepage.scss";
import React, {useState} from "react";
import LOGO from "../../../assets/DsLogo.png";
import takeout from "../../../assets/menu/takeout.jpg";

import "react-responsive-modal/styles.css";
import {Modal} from "react-responsive-modal";

const HomePage = () => {
  const [open, setOpen] = useState(false);

  return (
    <section id="homePage">
      <div className="container">
        <div className="main-logo">
          <img src={LOGO} alt="" />
          <button className="box" onClick={() => setOpen(true)}>
            テイクアウトOK
          </button>
          <Modal
            classNames={{
              overlay: "customOverlay",
              modal: "customModal",
            }}
            open={open}
            onClose={() => setOpen(false)}
            center
          >
            <img src={takeout} alt="takeout" />
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
