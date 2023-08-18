// check-https.js

module.exports = function(req, res, next) {
	if (req.get('x-forwarded-proto').indexOf("https") != -1) return next()
	else res.redirect('https://' + req.hostname + req.url)
}