// route-logger.js

const Logger = require("@ryanforever/logger").v2
const logger = new Logger(__filename, {debug: false, style: 0})

module.exports = function(req, res, next) {
	logger.info(`↔ ${req.method}${req.path}`)
	next()
}