import React from "react";
import "./Nav.css";

const Nav = (props) => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="/">
      Memory Game - Can You Remember What You Clicked?
    </a>
		<ul className="navbar-nav navbar-brand">
			<li>
				Score: {props.score} | Top Score: {props.topScore}
			</li>
		</ul>
  </nav>
);

export default Nav;
