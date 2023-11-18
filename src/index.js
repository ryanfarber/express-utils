// index.js

module.exports = {
	checkHttps: require("./check-https.js"),
	routeLogger: require("./route-logger.js"),
	routeLoggerV1: require("./route-logger-v1.js"),
	simpleAuth: require("./simple-auth.js"),
	whitelist: require("./whitelist.js"),
	forceHttps: require("./force-https.js"),
	sendStatus: require("./send-status.js"),
	echoRequest: require("./echo-request.js"),
	basicAuth: require("express-basic-auth"),
	send: require("./send.js")
}