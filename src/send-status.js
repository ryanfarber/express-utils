// send-status.js

function sendStatus(status = 200) {
	return (req, res, next) => res.sendStatus(status)
}

module.exports = sendStatus