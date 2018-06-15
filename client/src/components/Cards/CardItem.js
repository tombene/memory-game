import React from "react";
// import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";
import "./Cards.css";

// CardItem renders a bootstrap list item containing data from the image api call
export const CardItem = props => (
  <div onClick={() => {props.onClick(props.imgId)}}
		className="click-item"
    role="img"
		aria-label="Card Image"
		// src={props.href || 'http://via.placeholder.com/50x50' }
    style={{
      backgroundImage: `url(${props.href})`
		}}> 
				
  </div>
);
