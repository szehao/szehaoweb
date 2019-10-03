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
					description="Something about project. Something about project. Something about project. 
								 Something about project. Something about project. Something about project. "

				/>
			</div>
		);
	}
}
