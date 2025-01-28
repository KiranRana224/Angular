const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getUserLists,
  searchUser,
  addUser,
  updateUser,
} = require("../controller/login.controller");
const verifyToken = require("../middleware/verifyToken"); // Assuming you have this middleware for token verification
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", verifyToken, logoutUser); // Protect logout route
router.get("/profile", verifyToken, async (req, res) => {
  // Example of a protected route
  const user = await User.findByPk(req.userId);
  if (user) {
    return res.status(200).json({ email: user.email });
  }
  return res.status(404).json({ message: "User not found" });
});
router.get("/user-lists", getUserLists);
router.post("/searchUser", searchUser);
router.post("/addUser", addUser);
router.put("/updateUser", updateUser);

module.exports = router;
