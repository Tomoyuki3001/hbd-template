import React, { useState } from "react";
import "../Style/messages.css";
import Logo from "../Images/card-logo.png";

const Messages = () => {
  const [bd, setBd] = useState();
  const [card, setCard] = useState("card");
  const [button, setButton] = useState("card-button-continer");

  const birthday = () => {
    if (bd === "0101") {
      setBd("");
      setCard("card-after");
      setButton("card-button-continer-after");
      setTimeout(() => {
        setCard("card");
        setButton("card-button-continer");
      }, 60000);
    } else {
      alert("Please type your birthday");
      setBd("");
      return;
    }
  };
  return (
    <div className="card-container" id="messages">
      <h2 className="card-header">Birthday Messages</h2>
      <div className={button}>
        <h3 className="card-button-text">Put your birthday</h3>
        <input
          type="text"
          placeholder="demo 0101"
          value={bd}
          onChange={(e) => setBd(e.target.value)}
          className="card-button-input"
        />
        <button className="card-button" onClick={birthday}>
          OPEN
        </button>
      </div>
      <div className={card}>
        <div>
          <h2 className="card-dear">Dear Name,</h2>
          <p className="card-contents">
            Happy Birthday!! Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Excepturi assumenda, animi id eaque enim sunt reprehenderit
            ratione a ullam sit corporis sint modi sequi eveniet sapiente?
            Excepturi recusandae, deserunt maxime suscipit illo magni incidunt
            dolor nemo illum perspiciatis explicabo nesciunt aperiam quia
            minima, dicta iure temporibus officia? Velit, amet! Ipsam aliquid
            dicta nobis ipsa similique, debitis maxime eos ullam veritatis!
          </p>
          <h3 className="card-from">from Name</h3>
        </div>
        <img className="card-logo" src={Logo} alt="" />
      </div>
    </div>
  );
};

export default Messages;
