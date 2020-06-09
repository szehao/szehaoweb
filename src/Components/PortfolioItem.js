import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class PortfolioItem extends Component {
	render () {
		return (
			<div className="portfolio-item animateElement" animation="slideInFromLeft">
				<div className="item-image-container">
					<Link target="_blank" to={this.props.live}>
						<img src={this.props.img} alt={this.props.imgAlt} />
					</Link>
				</div>
				<div className="item-details">
					<div className="item-title">{this.props.title}</div>
					<div className="line-white-short" />
					<div className="item-description">{this.props.description}</div>
					<div className="button-container">
						<a target="_blank" rel="noopener noreferrer" href={this.props.source}>
							<div className="sourceCode-button button">Source Code</div>
						</a>
						<Link target="_blank" to={this.props.live}>
							<div className="preview-button button">Live Preview</div>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}
