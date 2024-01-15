import React from "react";
import "../Style/progress.css";
import Sample1 from "../Images/Progress/progress1.jpg";
import Sample2 from "../Images/Progress/progress2.jpg";
import Wb from "../Images/Progress/wb.png";
import Nf from "../Images/Progress/nf.png";

const Progress = () => {
  let date = new Date("Jan 01 2000").getTime();
  let today = new Date().getTime();
  let msDay = 24 * 60 * 60 * 1000;
  let days = Math.floor((today - date) / msDay);
  return (
    <div className="progress-container" id="progress">
      <h1 className="progress-header">Your Progress</h1>
      <p className="progress-text">Did you know?</p>
      <p className="progress-text">It's been...</p>
      <p className="progress-text">
        {" "}
        <span className="progress-days">
          {new Intl.NumberFormat().format(days)}
        </span>{" "}
        days
      </p>
      <p className="progress-text">since you were born</p>
      <p className="progress-text">and...</p>
      <p className="progress-text">"You can add own topics here!"</p>
      <p className="progress-text">"The example is below"</p>
      <p className="progress-text">
        you have already appeared in several productions!!
      </p>
      <div className="progress-movies">
        <img className="progress-movie-image" src={Sample1} alt="" />
        <img className="progress-movie-image" src={Sample2} alt="" />
      </div>
      <p className="progress-text">Wishing you a spotlight-filled 2024!</p>
      <div className="progress-logos">
        <img src={Wb} alt="" />
        <img src={Nf} alt="" />
      </div>
    </div>
  );
};

export default Progress;
