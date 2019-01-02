const datacontroller = require('./../controllers/data.ctrl')

module.exports = (router) => {
	router
        .route('/data')
        .get(datacontroller.getTestData)
}