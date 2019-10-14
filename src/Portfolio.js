import React, { Component } from 'react';
import PortFolioItem from "./Components/PortfolioItem.js"
import Anchor from "./Components/Anchor.js"

export default class Portfolio extends Component {
	render() {
		return (
			<div className="flex-container portfolio-container">
				<Anchor id="anchor-portfolio" offset="10px" />
				<div className="title">Portfolio</div>
				<div className="line-white-short"></div>
				<PortFolioItem
					img={require("./img/eatwhat-preview.png")}
					imgAlt="EatWhat Preview"
					title="Project EatWhat"
					description="My Final Year Project that I'm currently still working on. Food Recipe Website.
								The search feature of our website is the main reason behind this project."
					source="https://github.com/szehao/EatWhatWeb"
					live="eatwhat.ngszehao.com"

				/>
				<PortFolioItem
					img={require("./img/eatwhat-preview.png")}
					imgAlt="EatWhat Preview"
					title="Simple calculator"
					description="I cant keep my hands when im with you but i love it and i lvoe it"
					source="https://github.com/szehao/EatWhatWeb"
					live="eatwhat.ngszehao.com"

				/>
			</div>
		);
	}
}
