import React, { Component } from 'react';

export default class PortfolioItem extends Component {
	render() {
		return (
			<div className="portfolio-item">
				<div className="item-image-container"><a target="_blank" rel="noopener noreferrer" href={this.props.live}><img src={this.props.img} alt={this.props.imgAlt}/></a></div>
				<div className="item-details">
					<div className="item-title">{this.props.title}</div>
					<div className="line-white-short"></div>
					<div className="item-description">{this.props.description}</div>
					<div className="button-container">
						<a target="_blank" rel="noopener noreferrer" href={this.props.source}>
							<div className="sourceCode-button button">Source Code</div>
						</a>
						<a target="_blank" rel="noopener noreferrer" href={this.props.live}>
							<div className="preview-button button">Live Preview</div>
						</a>
					</div>
				</div>
			</div>
		);
	}
}
