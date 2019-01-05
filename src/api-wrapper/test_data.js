import axios from 'axios'

const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:5000/api/"

/// Get the test data api route
export async function getTestData() {
	return await axios.get(`${url}data`);
}