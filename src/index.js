import React from 'react';
import ReactDOM from 'react-dom';

import { LineChart, Line, YAxis, XAxis } from 'recharts';

import './index.css';

class App extends React.Component {
	render() {
		const data = [
			{year:1800, temp:0.0},
			{year:2018, temp:0.6},
			{year:2100, temp:1.5}
		];

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
						<h2>Global Average Temperature</h2>
						<LineChart width={400} height={400} data={data}>
							<XAxis dataKey="year"/>
       						<YAxis dataKey="temp"/>
  							<Line type="monotone" dataKey="temp" stroke="#8884d8" />
						</LineChart>
						<p>Data completely fictious</p>
					</div>
				</div>
			</div>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));
