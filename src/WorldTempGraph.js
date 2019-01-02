import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { getTestData } from './redux/actions/actions'

import { LineChart, Line, YAxis, XAxis } from 'recharts';

const mapStateToProps = state => {
    return {
        data: state.data.data
    }
}

class WorldTempGraph extends React.Component {
	componentWillReceiveProps(nextProps) {
    }
    componentWillMount() {
        this.props.getTestData()
    }

	render() {
		return (
			<div>
			<h2>Global Average Temperature</h2>
			<LineChart width={400} height={400} data={this.props.data}>
							<XAxis dataKey="year"/>
							<YAxis dataKey="temp"/>
							<Line type="monotone" dataKey="temp" stroke="#8884d8" />
			</LineChart>
			</div>
		)
	}
}

//export default WorldTempGraph;
export default connect(mapStateToProps, { getTestData })(WorldTempGraph);
