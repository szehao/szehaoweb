import React from 'react';
import { Route } from 'react-router-dom';
import DivSnippetApp from './Projects/divsnippet/DivSnippetApp';
import Main from './Main.js';
// import DivSnippetApp from './Projects/divsnippet/App';

export default class App extends React.Component {
	render () {
		return (
			<div>
				<Route exact path={`/`} render={(routerProps) => <Main />} />
				<Route path={`/projects/divsnippet`} render={(routerProps) => <DivSnippetApp />} />
				<Route path={`/projects/eatwhat`} component={() => (window.location = 'http://eatwhat.ngszehao.com')} />
			</div>
		);
	}
}
