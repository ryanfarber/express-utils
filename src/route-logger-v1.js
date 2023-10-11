// route-logger-v1.js
const Logger = require("@ryanforever/logger").v2
const logger = new Logger(__filename, {debug: false, style: 0})


function routeLogger(req, res, next) {
	logger.info(`↔ ${req.method}${req.path}`)
	next()
}


module.exports = routeLogger
