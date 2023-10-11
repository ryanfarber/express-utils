// route-logger.js

const Logger = require("@ryanforever/logger").v2
const logger = new Logger(__filename, {debug: false, style: 0})



function routeLogger(config = {}) {
	let ignore = config.ignore ?? []
	ignore = ignore.map(x => {
		if (!x.startsWith("/")) x = `/${x}`
		x = x.replace(/\/+/gi, "/")
		return x
	})

	return function(req, res, next) {
		if (ignore.includes(req.method)) return
		logger.info(`↔ ${req.method}${req.path}`)
		next()
	}
}


module.exports = routeLogger