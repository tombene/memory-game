import React from "react";
import "./Jumbotron.css";

const Jumbotron = (props) => (
  <div className="jumbotron text-center">
    {/* <h1>To get started search for images that you want to use.</h1>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="http://developers.gettyimages.com/api/"
    >
      Powered by Getty Images
    </a> */}
		<h1>{props.gameOverMsg}</h1>
  </div>
);

export default Jumbotron;
