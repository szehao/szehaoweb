import React, { Component } from 'react';
import PortFolioItem from './Components/PortfolioItem.js';
import Anchor from './Components/Anchor.js';
import EatWhatPreview from './img/eatwhat-preview.png';
import DivSnippetPreview from './img/div-snippet-preview.png';

export default class Portfolio extends Component {
	render () {
		return (
			<div className="flex-container portfolio-container">
				<Anchor id="anchor-portfolio" offset="10px" />
				<div className="title animateElement" animation="slideInFromLeft">
					Portfolio
				</div>
				<div className="line-white-short animateElement" animation="slideInFromLeft" />
				<PortFolioItem
					img={EatWhatPreview}
					imgAlt="EatWhat Preview"
					title="Project EatWhat"
					description="My Final Year Project that I'm currently still working on. Food Recipe Website.
								The search feature of our website is the main reason behind this project."
					source="https://github.com/szehao/EatWhatWeb"
					live="/projects/eatwhat"
				/>
				<PortFolioItem
					img={DivSnippetPreview}
					imgAlt="Div Snippet Preview"
					title="Div Snippets"
					description="A simple html and css generator for background 'divs'. Built with ReactJS."
					source="https://github.com/szehao/div-snippets"
					live="/projects/divsnippet"
				/>
			</div>
		);
	}
}
