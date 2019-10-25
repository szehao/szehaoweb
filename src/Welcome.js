import React from "react"

export default class Welcome extends React.Component{

	render(){
		return(
			<div className="flex-container welcome">
				<div className="welcome-text">
					Hello, I'm <span>Sze Hao</span>.
					<br/>I'm a student / developer.
				</div>
				<div className="button home-button" onClick={() => this.props.click("from-welcome")}>
					What I do <i className="arrow-right"></i>
				</div>
			</div>
		)
	}
}