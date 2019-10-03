import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';

export default class Contact extends Component {
	render() {
		return (
			<div className="flex-container contact-container">
				<div className="title">Contact</div>
				<div className="line-white-short"></div>
				<div className="text">Have a project in mind? Tell me about it.</div>
				<div className="form-container" >
					<form action="" >
							<div className="form-start-container" >
								<div className="name-container">
									<div className="field-name">Name</div>
									<input type="text" name="name"   required />
								</div>
								<div className="email-container">
									<div className="field-name">Email</div>
									<input type="email" name="email"  autoComplete="new-password" required />
								</div>
							</div>
							<div className="field-name">Message</div>
							<TextareaAutosize 
								rows={10}
								style={{width: "95%"}}
							/>
							<div className="button submit-button">Submit</div>
					</form>
				</div>
			</div>
		);
	}
}
