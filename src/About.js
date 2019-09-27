import React from "react";

class About extends React.Component{
	
	render(){
		return (
			<div className="flex-container about-container">
				<div className="sub-title" id="about-title">ABOUT</div>
				<hr className="sub-title-underline"/>
				<div className="about-text">
					I'm a student of Taylor's University currently pursuing a degree in IT.
					I got into coding 2 years ago and have loved it since. I don't
					code 24/7 but when I do, I don't stop until I finish a part. 
				</div>
			</div>
		)
	}
}

export default About;