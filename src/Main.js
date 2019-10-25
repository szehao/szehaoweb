import React, { Component } from 'react';
import Header from "./Components/Header.js"
import AnimateCanvas from "./Components/AnimateCanvas.js"
import Welcome from "./Welcome.js"
import About from "./About.js"
import Portfolio from "./Portfolio.js"
import Contact from "./Contact.js"
import Footer from "./Components/Footer.js"
import "./Scss/index.scss"
import "./Scss/reset.css"

export default class Main extends Component {
	
	constructor(props){
		super(props);
		this.homeRef 		= React.createRef();
		this.aboutRef 		= React.createRef();
		this.portfolioRef 	= React.createRef();
		this.contactRef 	= React.createRef();
		this.state = {
			className : "",
		};
		this.handleClick 	= this.handleClick.bind(this);
		this.smoothScroll 	= this.smoothScroll.bind(this);
	}
	
	
	componentDidMount(){
		this.setState({
			offset : {
				home 		: this.homeRef.current.getBoundingClientRect().height,
				about 		: this.aboutRef.current.getBoundingClientRect().height,
				portfolio 	: this.portfolioRef.current.getBoundingClientRect().height,
				contactdiv 	: this.contactRef.current.getBoundingClientRect().height
			}
		});
	}

	smoothScroll = (ele) => {
		ele.scrollIntoView({behavior : "smooth", block : "start"});
	}

	handleClick = (ele) => {
		switch(ele){
			case "home":
				this.smoothScroll(this.homeRef.current);
			break;
			case "about":
				this.smoothScroll(document.getElementById("anchor-about"));
			break;
			case "portfolio":
				this.smoothScroll(document.getElementById("anchor-portfolio"));
			break;
			case "contact":
				this.smoothScroll(document.getElementById("anchor-contact"));
			break;
			case "from-welcome":
				if(window.innerWidth < 900){
					this.smoothScroll(document.getElementById("anchor-about"));
				}else{
					this.smoothScroll(document.getElementById("anchor-about-welcome"));
				}
			break;
			default:
				this.smoothScroll(this.homeRef.current);
			break;
		}
	}

	render() {
		return (
			<div>
				<main>
					<section id="home" ref={this.homeRef}>
							<AnimateCanvas />
							<Welcome click={this.handleClick}/>
					</section>
						<Header 
							className={this.state.className}  
							click={this.handleClick}
							offset={this.state.offset}
						/>
					<section id="about" ref={this.aboutRef}>
						<About click={this.handleClick}/>
					</section>
					<section id="portfolio" ref={this.portfolioRef}>
						<Portfolio />
					</section>
					<section id="contact" ref={this.contactRef}>
						<Contact />
					</section>
				</main>
				<Footer />
			</div>
		);
	}
}
