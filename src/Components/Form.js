import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';

export default class Form extends Component {
	
	constructor(props){
		super(props);
		this.submitForm = this.submitForm.bind(this);
		this.state = {
			status : "",
		};
	}
	
	 submitForm(ev) {
		ev.preventDefault();
		const form = ev.target;
		const data = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: "SUCCESS" });
			} else {
				this.setState({ status: "ERROR" });
			}
		};
		xhr.send(data);
	}

	render() {

		return (
			<form 
				onSubmit={this.submitForm}
				action="https://formspree.io/mdrqrkvm"
				method="POST"
			>
				<div className="form-start-container" >
					<div className="name-container">
						<div className="field-name">Name</div>
						{/*To remove auto complete issue*/}
						<input style={{display: "none"}} type="name" name="new-name"/>
						<input type="text" name="name" autoComplete="new-username"  required />
					</div>
					<div className="email-container">
						<div className="field-name">Email</div>
						<input type="email" name="email"  autoComplete="new-password" required />
					</div>
				</div>
				<div className="field-name">Message</div>
				<TextareaAutosize 
					rows={10}
					style={{width: "100%"}}
					onChange={ e => this.setState({value : e.target.value})}
				/>
				<input type="hidden" name="message" value={this.state.value}/>
				<button className="button submit-button">Submit</button>
			</form>
		);
	}
}
