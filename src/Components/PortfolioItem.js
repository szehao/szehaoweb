import React, { Component } from 'react';

export default class PortfolioItem extends Component {
	render() {
		return (
			<div className="portfolio-item">
				<div className="item-image-container"><img src={this.props.img} alt={this.props.imgAlt}/></div>
				<div className="item-details">
					<div className="item-title">{this.props.title}</div>
					<div className="line-white-short"></div>
					<div className="item-description">{this.props.description}</div>
					<div className="sourceCode-button button">Source Code</div>
					<div className="preview-button button">Live Preview</div>
				</div>
			</div>
		);
	}
}
