function getClientIP(req) {
	return req.headers['x-forwarded-for'] ||
		req.connection.remoteAddress  ||
		req.socket.remoteAddress      ||
		req.connection.socket.remoteAddress;
}

module.exports = {getIP: getClientIP};
