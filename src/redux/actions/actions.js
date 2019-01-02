import axios from 'axios'

const url = process.env.NODE_ENV === 'production' ? "/api/" : "http://localhost:5000/api/"

export function getTestData () {
    return (dispatch) => {
        axios.get(`${url}data`)
        .then((res) => {
        	console.log(res.data)
            let data = res.data
            dispatch({type:'GET_TEST_DATA', data})
        }).catch((err) => {
            console.log(err)
        })
    }
}
