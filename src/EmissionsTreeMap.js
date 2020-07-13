import React from 'react';

import { getEmissionsData } from './api-wrapper/emissions_data'

import { LineChart, Line, YAxis, XAxis } from 'recharts';

class EmissionsTreeMap extends React.Component {
	constructor(props) {
		super(props)
        getEmissionsData()
        	.then(result => {
        		this.setState({data: result.data});
        	})
			.catch(err => console.log(err))
    }

	render() {
		if(this.state === null) {
			return (<p>Loading.ass..</p>)
		}

		let total = 0
		console.log(this.state.data)
		for(var i = 2; i < this.state.data.length; ++i) {
			console.log(this.state.data[i]['emissions'])
			total += parseFloat(this.state.data[i]['emissions'])
		}

		const globalEmissions = total

		return (
			<div>
				<p>Total global emissions: {globalEmissions}</p>
			</div>
		)
	}
}

export default EmissionsTreeMap;
