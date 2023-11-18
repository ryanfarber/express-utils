// echo-request.js

function echoRequest(req, res, next) {
	res.send({baseUrl: req.baseUrl, url: req.url, path: req.path, method: req.method, body: req.body, query: req.query, params: req.params, headers: req.headers})
}

module.exports = echoRequest