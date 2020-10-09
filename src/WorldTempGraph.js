import React from 'react';

import { getTestData } from './api-wrapper/test_data'

import { LineChart, Line, YAxis, XAxis, ResponsiveContainer, CartesianGrid, Tooltip } from 'recharts';

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
			<ResponsiveContainer height={400} width="100%">
				<LineChart data={this.state.data}  margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="year"/>
					<YAxis dataKey="temp"/>
  					<Tooltip />
					<Line type="monotone" dataKey="temp" stroke="#8884d8" />
				</LineChart>
			</ResponsiveContainer>
		)
	}
}

export default WorldTempGraph;
