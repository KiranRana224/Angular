const jwt = require("jsonwebtoken");
const User = require("../models/login.model");

const verifyToken = async (req, res, next) => {
	const token = req.headers["authorization"]?.split(" ")[1]; // Bearer <token>

	if (!token) {
		return res.status(403).json({ message: "Token is required" });
	}

	console.log("Token from request:", token); // Log the token being verified

	try {
		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		const user = await User.findByPk(decoded.id);

		// Check if the token matches the one stored in the database
		if (user && user.jwt_token === token) {
			req.userId = decoded.id; // Attach user ID to request
			next(); // Continue to the next middleware/route handler
		} else {
			return res.status(401).json({ message: "Invalid token" });
		}
	} catch (err) {
		console.error(err);
		return res.status(401).json({ message: "Invalid token" });
	}
};

module.exports = verifyToken;
