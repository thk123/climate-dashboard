import React from 'react';

import { getTestData } from './api-wrapper/test_data'

import { LineChart, Line, YAxis, XAxis } from 'recharts';

class WorldTempGraph extends React.Component {
	constructor(props) {
		super(props)
        getTestData()
        	.then(result => {
        		this.setState({data: result.data});
        	})
			.catch(err => console.log(err))
    }

	render() {
		if(this.state === null) {
			return (<p>Loading...</p>)
		}
		return (
			<div>
			<h2>Global Average Temperature</h2>
			<LineChart width={400} height={400} data={this.state.data}>
							<XAxis dataKey="year"/>
							<YAxis dataKey="temp"/>
							<Line type="monotone" dataKey="temp" stroke="#8884d8" />
			</LineChart>
			</div>
		)
	}
}

export default WorldTempGraph;
