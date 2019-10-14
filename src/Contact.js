import React, { Component } from 'react';
import Form from "./Components/Form.js"
import Anchor from "./Components/Anchor.js"

export default class Contact extends Component {
	render() {
		return (
			<div className="flex-container contact-container">
				<Anchor id="anchor-contact" offset="10px" />
				<div className="title">Contact</div>
				<div className="line-white-short"></div>
				<div className="text">Have a project in mind? Tell me about it.</div>
				<div className="form-container" >
					<Form />
				</div>
			</div>
		);
	}
}
