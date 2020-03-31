import React, { Component } from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import AlertBox from "./AlertBox.js"

export default class Form extends Component {
	
	constructor(props){
		super(props);
		this.state = {
			status : "",
			content : "Sorry, an error occured while submitting the form. "
		};
		this.submitForm = this.submitForm.bind(this);
		this.handleButton = this.handleButton.bind(this);
		this.showForm = this.showForm.bind(this);
	}

	showForm = (e) => {
		document.querySelector(".alert-box-container").style.opacity = e === true? "1" : "0";
		setTimeout(() => {document.querySelector(".alert-box-container").style.display = e === true? "block" : "none"},500);
	}

	handleButton = (e) => {
		if(e !== "retry"){
			this.showForm(false);
		}else{
			document.querySelector(".submit-button").click();
		}
	}

	submitForm = (e) => {
		e.preventDefault();
		
		const form 	= e.target;
		const data 	= new FormData(form);
		const xhr 	= new XMLHttpRequest();

		xhr.open(form.method, form.action);
		xhr.setRequestHeader("Accept", "application/json");
		
		xhr.onreadystatechange = () => {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				form.reset();
				this.setState({ status: "success", content: "Your form has been submitted! I'll get to you soon!"});
			} else {
				this.setState({ status: "error", content : "Sorry, an error occured while submitting the form. " });
			}
			this.showForm(true);
		};
		xhr.send(data);
	}

	render = () => {

		return (
			<form 
				onSubmit={this.submitForm}
				action="https://formspree.io/mdrqrkvm"
				method="POST"
				className="animateElement"
				animation="fade"
			>
				<div className="form-start-container" >
					<div className="name-container">
						<div className="field-name">Name</div>
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
					name="message"
				/>
				<button className="button submit-button">Submit</button>
				<AlertBox 
					status={this.state.status} 
					content={this.state.content} 
					handleButton={this.handleButton}
				/>
			</form>
		);
	}
}
