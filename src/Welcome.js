import React from "react"
import {Link} from "react-scroll"

export default class Welcome extends React.Component{
	
	render(){
		return(
			<div className="flex-container welcome">
				<div className="welcome-text">
					Hello, I'm <span>Sze Hao</span>.
					<br/>I'm a student / developer.
				</div>

				<Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={1}
                    duration={250}
                >
	                <div className="button home-button">
	                What I do <i className="arrow-right"></i>
					</div>
                </Link>
			</div>
		)
	}
}