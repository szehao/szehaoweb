import React from "react"
import Header from "./Components/Header.js"
import AnimateCanvas from "./Components/AnimateCanvas.js"
import Welcome from "./Welcome.js"
import About from "./About.js"
import Portfolio from "./Portfolio.js"
import "./Scss/index.scss"
import "./Scss/reset.css"
import IntersectionVisible from 'react-intersection-visible';

export default class App extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			className : "",
			display : "",
			curPage : "home"
		};
	}

	render(){
		return(
				<main>
					<section id="home">
						<IntersectionVisible
							active={this.state.active}
							className="flex-container"
							onHide={() => {window.innerWidth < 427 ? 
								this.setState({display : "block", curPage : ""}) :
								this.setState({className : "fixed"})
							}}
							onShow={() => {window.innerWidth < 427 ? 
								this.setState({curPage : "home"}) :
								this.setState({className : ""})
							}}
						>
							<AnimateCanvas />
							<Welcome />
						</IntersectionVisible>
						<Header className={this.state.className} style={this.state.display}/>
					</section>
					<section id="about">
						<IntersectionVisible
							onHide={() => {
								if(window.innerWidth < 427 && this.state.curPage === "home"){
								this.setState({display : "none"})
								}
							}}
							onShow={() => {
								if(window.innerWidth < 427){
									this.setState({display: "block"})
								}
							}}
						>
						<About />
						</IntersectionVisible>
					</section>
					<section id="portfolio">
						<Portfolio />
					</section>
					<section id="contact">
					</section>
				</main>
		);
	}
}