// whitelist.js
const kindof = require("kind-of")

// check if IP is in whitelist, disallow if not
module.exports = function(whitelist = []) {
	
	if (kindof(whitelist) !== "array") throw new Error("whitlist requires an array of ip address strings.")

	return function(req, res, next) {
		let ip = req.headers["x-forwarded-for"]
		if (ip) ip = ip.split(",")[0].trim()
		if (!whitelist.includes(ip)) res.sendStatus(401)
		else next()
	}
}