import React from 'react';
import ReactDOM from 'react-dom';

import { LineChart, Line, YAxis, XAxis } from 'recharts';

import './index.css';
import WorldTempGraph from './WorldTempGraph'

class App extends React.Component {
	render() {
		return (
			<div id="root">
				<div id="title-bar"><h1>Climate Dashboard</h1></div>
				<div id="main">
					<div id="nav-bar">
						<ul className = "nav">
							<li><a href="index">Dashboard</a></li>
							<li><a href="emissions">Emissions</a></li>
							<li><a href="carbon_budget">Carbon Budget</a></li>
							<li><a href="contribubte">Contribubte</a></li>
						</ul>
					</div>
					<div id="content">
						<WorldTempGraph />
					</div>
				</div>
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));
