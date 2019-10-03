import React, { Component } from 'react';
import PortFolioItem from "./Components/PortfolioItem.js"

export default class Portfolio extends Component {
	render() {
		return (
			<div className="flex-container portfolio-container">
				<div className="title">Portfolio</div>
				<div className="line-white-short"></div>
				<PortFolioItem
					img={require("./img/eatwhat-preview.png")}
					imgAlt="EatWhat Preview"
					title="Project EatWhat"
					description="My Final Year Project that I'm currently still working on. Food Recipe Website.
								The search feature of our website is the main reason behind this project."
					source="https://github.com/szehao/EatWhatWeb"
					live=""

				/>
			</div>
		);
	}
}
