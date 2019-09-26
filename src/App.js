import React from "react"
import { Link, animateScroll as scroll } from "react-scroll";
import Header from "./Components/Header.js"

import AnimateCanvas from "./Components/AnimateCanvas.js"
import Welcome from "./Welcome.js"
import About from "./About.js"
import "./Scss/index.scss"
import "./Scss/reset.css"

export default class App extends React.Component{
	
	render(){
		return(
			<div className="main-container">
				<section id="home">
					<AnimateCanvas />
					<Welcome />
				</section>
				<Header />
				<section id="about">
					<About />
				</section>
				<section id="portfolio">

				</section>
				<section id="contact">
				
				</section>
			</div>
		);
	}
}