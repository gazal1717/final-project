const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const tokenParts = token.split(" ");
    if (tokenParts.length !== 2 || tokenParts[0] !== "Bearer") {
      return res.status(401).json({ message: "Invalid token format" });
    }

    const decoded = jwt.verify(tokenParts[1], process.env.JWT_SECRET || "secretkey");
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid or expired token" });
  }
};

module.exports = authenticate;
