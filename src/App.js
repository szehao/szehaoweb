import React from "react"
import {Route} from 'react-router-dom';
import Main from "./Main.js"

export default class App extends React.Component{
	
	render(){
		return(
			<div>
				<Route exact path={`/`} render={ (routerProps) => <Main />}/>
			</div>
		);
	}
}