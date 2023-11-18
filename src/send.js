// send.js

function send(input, status = 200) {
	return (req, res, next) => res.status(status).send(input)
}

module.exports = send