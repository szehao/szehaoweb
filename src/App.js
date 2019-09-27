import React from "react"
import Header from "./Components/Header.js"
import AnimateCanvas from "./Components/AnimateCanvas.js"
import Welcome from "./Welcome.js"
import About from "./About.js"
import "./Scss/index.scss"
import "./Scss/reset.css"
import IntersectionVisible from 'react-intersection-visible';

export default class AppTest extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			className : "",
		};
	}

	render(){
		return(
				<main>
					<section id="home">
						<IntersectionVisible
							className="flex-container"
							onHide={() => {this.setState({className : "fixed"})}}
							onShow={() => {this.setState({className : ""})}}
						>
							<AnimateCanvas />
							<Welcome />
						</IntersectionVisible>
						<Header className={this.state.className}/>
					</section>
					<section id="about">
						<About />
					</section>
					<section id="portfolio">
					</section>
					<section id="contact">
					</section>
				</main>
		);
	}
}