import React from "react";
import Anchor from "./Components/Anchor.js"

class About extends React.Component{

	render(){
		return (
			<div className="flex-container about-container">
				<Anchor id="anchor-about" offset="10px"/>
				<Anchor id="anchor-about-welcome" offset="-10px"/>
				<div className="about-left-container">
					<div className="title">
						Who I am
					</div>
					<div className="short-description">
						I'm a student of Taylor's University currently pursuing a degree in IT. 
						I got into coding 2 years ago and have loved it since. I don't code 24/7 
						but when I do, I don't stop until I complete a part.
					</div>
					<div className="ic-but-container">
						<div className="icon-container">
							<a target="_blank" rel="noopener noreferrer" href="https://github.com/szehao">
								<div className="icon" title="github icon">
									<svg fill="#1D252D" height="45px" id="Layer_1" version="1.1" viewBox="0 0 67 67" width="45px" xmlns="http://www.w3.org/2000/svg"><path d="M20.543,34.568c-0.054,0,0.592,1.367,0.61,1.367  c1.41,2.516,4.128,4.08,8.713,4.514c-0.654,0.488-1.44,1.414-1.549,2.484c-0.823,0.523-2.478,0.696-3.764,0.297  c-1.803-0.559-2.493-4.066-5.192-3.566c-0.584,0.107-0.468,0.486,0.037,0.809c0.823,0.523,1.597,1.178,2.194,2.571  c0.459,1.07,1.423,2.981,4.473,2.981c1.21,0,2.058-0.143,2.058-0.143s0.023,2.731,0.023,3.793c0,1.225-1.682,1.57-1.682,2.159  c0,0.233,0.557,0.255,1.004,0.255c0.884,0,2.723-0.725,2.723-1.998c0-1.011,0.017-4.41,0.017-5.006c0-1.3,0.709-1.712,0.709-1.712  s0.088,6.94-0.169,7.872c-0.302,1.094-0.847,0.939-0.847,1.427c0,0.726,2.214,0.179,2.948-1.416c0.567-1.239,0.319-8.05,0.319-8.05  l0.605-0.012c0,0,0.034,3.117,0.013,4.542c-0.021,1.476-0.123,3.342,0.769,4.222c0.586,0.579,2.484,1.594,2.484,0.666  c0-0.539-1.04-0.982-1.04-2.441v-6.715c0.831,0,0.706,2.208,0.706,2.208l0.061,4.103c0,0-0.184,1.494,1.645,2.119  c0.645,0.223,2.025,0.283,2.09-0.09c0.065-0.373-1.662-0.928-1.678-2.084c-0.01-0.707,0.032-1.119,0.032-4.187  c0-3.068-0.419-4.202-1.88-5.106c4.508-0.455,7.299-1.551,8.658-4.486c0.106,0.003,0.555-1.371,0.496-1.371  c0.305-1.108,0.47-2.419,0.502-3.971c-0.008-4.21-2.058-5.699-2.451-6.398c0.58-3.187-0.098-4.637-0.412-5.135  c-1.162-0.406-4.041,1.045-5.615,2.067c-2.564-0.737-7.986-0.666-10.019,0.19c-3.751-2.639-5.736-2.235-5.736-2.235  s-1.283,2.259-0.339,5.565c-1.234,1.546-2.154,2.64-2.154,5.539C19.906,31.83,20.102,33.292,20.543,34.568z M3,4h60v60H3V4z"/></svg>
								</div>
							</a>
							<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ng-sze-hao-184728175/">
								<div className="icon" title="linked in icon">
									<svg width="46.5px" height="46.5px" version="1.1" viewBox="0 0 100 100"  xmlns="http://www.w3.org/2000/svg"><g id="color_x5F_fill"><path d="M92.768,41.873c-0.012-5.826,0.419-11.764,0.18-17.62c-0.117-2.899-0.18-17.445-0.18-17.445   c-2.975,0-7.061-0.047-9.987,0.181C75.108,7.586,5.91,6.95,5.91,6.95c-0.003,3.819,0,17.323,0,21.158   c0,8.002-0.123,15.69-0.182,23.633C5.626,65.488,5.91,79.464,5.91,92.938l1.589,0.081c3.631-0.428,6.285-0.019,9.717-0.081   c6.002-0.109,32.354,0.455,39.309,0.181c6.314-0.248,33.29,0.092,35.878,0.017c0,0,0.438-36.227,0.364-38.87   C92.651,50.083,92.775,46.01,92.768,41.873z M31.895,80.354l-13.072-0.068c-0.012-1.021,0.289-4.897,0.2-6.163   c-0.1-1.412-0.139-6.96-0.157-8.34c-0.016-1.378,0.091-7.525,0.124-9.241c0.044-2.294-0.042-4.588-0.042-6.882   c0-3.328,0-7.17,0-10.191c0,0,9.233-1.185,12.675,0l0.04,2.091c-0.005,1.159-0.018,5.775,0.027,6.903   c0.106,2.597,0.32,5.625,0.216,8.245c-0.102,2.616-0.041,6.228,0.027,8.791C32.083,71.14,31.98,75.036,31.895,80.354z    M20.011,31.436c-1.945-1.405-2.788-4.5-2.122-6.957c1.203-4.445,6.695-6.755,10.735-4.939   C38.453,23.958,29.714,38.444,20.011,31.436z M79.729,80.764l-12.675-0.136c0-7.774,0.137-21.193-0.134-23.798   c-0.27-2.605-1.269-5.094-2.01-5.81c-1.238-1.197-3.443-1.461-5.079-1.465c-4.411-0.011-7.155,3.339-7.36,5.928   c-0.205,2.59-0.219,16.428-0.068,18.603c0.103,1.476,0.068,6.678,0.068,6.678c-3.907,0-7.404,0-11.311,0h-1.226   c-0.014-5.398,0.297-11.4,0.068-17.104c-0.14-3.493-0.375-7.234-0.34-10.702c0.019-1.855-0.045-3.713,0-5.567   c0.044-1.844,0.136-8.056,0.136-8.056c2.459,0.037,4.607-0.08,6.473,0c2.158,0.091,3.86-0.021,5.877,0.126   c0.188,1.577-0.005,4.304,0.188,5.597c0,0,4.872-5.574,8.042-5.992c2.768-0.367,5.004-1.115,7.805-0.14   c3.428,1.194,6.181,2.425,8.714,5.175c0.888,0.964,1.815,2.124,2.014,3.432c0.32,2.101,0.32,2.101,0.409,3.107   c0.114,1.278,0.542,7.994,0.545,10.069C79.87,63.077,78.958,79.098,79.729,80.764z" fill="#1D252D"/></g><g id="offset_x5F_print_x5F_outline"/></svg>
								</div>
							</a>
						</div>
						<div className="button about-button" onClick={() => this.props.click("contact")}>
							Contact Me
						</div>
					</div>
				</div>
				<div className="about-right-container">
					<div className="title">
						Skills
					</div>
					<div className="skills-container">
						<div className="skill-title">Front-End:</div>
						<div className="skill">HTML, CSS, SASS JavaScript, jQuery, React.js</div>
					</div>
					<div className="skills-container">
						<div className="skill-title">Back-End:</div>
						<div className="skill">PHP, Ajax, MySQL</div>
					</div>
					<div className="skills-container">
						<div className="skill-title">Others:</div>
						<div className="skill">Java (Mobile Development)</div>
					</div>
					<div className="skills-container">
						<div className="skill-title">Tools:</div>
						<div className="skill">Adobe XD</div>
					</div>
				</div>
			</div>
		)
	}
}

export default About;