import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import WorldTempGraph from './WorldTempGraph'
import Header from './header/Header';
import { Card, Col, Row } from 'react-bootstrap';

class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Header />
				<Row>
					<Col className="m-3">
						<Card>
							<Card.Header className="bg-dark text-white">Global Average Temperature</Card.Header>
							<Card.Body>
								<WorldTempGraph />
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</React.Fragment>
		)
	}
}


ReactDOM.render(<App />, document.getElementById('root'));
