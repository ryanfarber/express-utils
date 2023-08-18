// simple-auth.js

module.exports = function(token) {
	if (!token) throw new Error("please provide a token to use with simple-auth middleware")
	return function(req, res, next) {
		let headers = req.headers
		if (headers.token !== token) return res.sendStatus(401)
		else next()
	}
}
