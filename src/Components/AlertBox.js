import React, { Component } from 'react';
import "../Scss/alertBox.scss"

const buttonContainer = {
	height: "25%",
	width : "100%",
	background : "#2dc840",
	display : "flex",
	justifyContent : "center",
	alignItems : "center",
	flexDirection : "column",
	cursor: "pointer"
};

const buttonContainerFailure = {
	height: "25%",
	width : "100%",
	background : "#e1e1e1",
	display : "flex",
	justifyContent : "flex-end",
	alignItems : "center",
	flexDirection : "row"
};

export default class AlertBox extends Component { 
	render() {
		return (
			<div className="alert-box-container">
				<div className="content">
					<div className="icon">
					{this.props.status === "success"?
						// Success Icon
						<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 429.2 426.9" width="50px" height="50px"><circle className="st0" cx="215.4" cy="212.5" r="205.9" fill="#FFFFFF" stroke="#15BC2D" strokeWidth="23.0312" strokeMiterlimit="10"/><polyline className="st1" points="126.4,256.8 196.7,310 322.1,134 "  fill="none" stroke="#15BC2D" strokeWidth="23.0312" strokeMiterlimit="10"/></svg>
						:
						// Error Icon
						<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 429.2 426.9" width="50px" height="50px"><circle className="st2" cx="214.6" cy="213.5" r="205.9" fill="#FFFFFF" stroke="#D00000" strokeWidth="23.0312" strokeMiterlimit="10"/><line className="st3" x1="118.4" y1="309.6" x2="310.7" y2="117.3" fill="none" stroke="#D00000" strokeWidth="23.0312" strokeMiterlimit="10"/><line className="st3" x1="310.7" y1="309.6" x2="118.4" y2="117.3" fill="none" stroke="#D00000" strokeWidth="23.0312" strokeMiterlimit="10"/></svg>
					}
					</div>
					{this.props.content? this.props.content : "Error retrieving Message"}
				</div>
				<div 
					className="button-container" 
					style={this.props.status === "success"? buttonContainer : buttonContainerFailure}
					onClick={() => this.props.status === "success"? this.props.handleButton("success") : null}
				>
					<div
						style={this.props.status === "success"? {display : "none"} : null}
						className="button-cancel"
						onClick={() => this.props.handleButton("cancel")}
					>
						Cancel
					</div>
					<div  
						className={this.props.status !== "success"? "button-retry" : null}
						onClick={() => this.props.status !== "success"? this.props.handleButton("retry") : null}
					>
						{this.props.status === "success"? "Thanks" : "Try Again"}
					</div>
				</div>
			</div>
		);
	}
}
