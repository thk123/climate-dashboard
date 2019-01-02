import React from 'react';
import ReactDOM from 'react-dom';

import { LineChart, Line, YAxis, XAxis } from 'recharts';

class WorldTempGraph extends React.Component {
	constructor(props) {
		super(props)
		const data = [
			{year:1800, temp:0.0},
			{year:2018, temp:0.6},
			{year:2100, temp:1.5}
		];
		this.state = {
			data: data
		}
	}

	render() {
		return (
			<div>
			<h2>Global Average Temperature</h2>
			<LineChart width={400} height={400} data={this.state.data}>
							<XAxis dataKey="year"/>
							<YAxis dataKey="temp"/>
							<Line type="monotone" dataKey="temp" stroke="#8884d8" />
			</LineChart>
			<p>Data completely fictious</p>
			</div>
		)
	}
}

export default WorldTempGraph;