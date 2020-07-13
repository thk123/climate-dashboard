import axios from 'axios'

const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:4999/api/"

/// Get the test data api route
export async function getEmissionsData() {
	return await axios.get(`${url}globalEmissions`);
}