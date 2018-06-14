import React from "react";
import Thumbnail from "../Thumbnail";
import { Container, Row, Col } from "../Grid";

// CardItem renders a bootstrap list item containing data from the image api call
export const CardItem = props => (
  <div onClick={props.onClick} div-id={props.imgId}> 
				<Thumbnail src={props.href || 'http://via.placeholder.com/50x50' } id={props.imgId}/>
  </div>
);
