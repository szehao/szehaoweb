import React, { Component } from 'react';

export default class Anchor extends Component {

	render() {
		return (
			<div 
				id={this.props.id}
				className="anchor"
				style={{top: this.props.offset}}
			>
			</div>
		);
	}
}
