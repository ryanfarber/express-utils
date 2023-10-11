// route-logger.js

const Logger = require("@ryanforever/logger").v2
const logger = new Logger(__filename, {debug: false, style: 0})



routeLogger(config = {}) {
	let ignore = config.ignore ?? []
	ignore = ignore.map(x => {
		if (!x.startsWith("/")) x = `/${x}`
		x = x.replace(/\/+/gi, "/")
		return x
	})
	console.log(ignore)
	return function(req, res, next) {
		if (ignore.includes)
		logger.info(`↔ ${req.method}${req.path}`)
		next()
	}
}


module.exports = routeLogger