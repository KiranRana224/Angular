const jwt = require("jsonwebtoken");
const User = require("../models/login.model");
const bcrypt = require("bcrypt");
const moment = require("moment");
const { Op } = require("sequelize"); // Assuming Sequelize is used for querying the database
const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userFound = await User.findOne({ where: { email } });
    if (userFound) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const user = await User.create({ email, password });

    // Generate a new JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET
    );

    // Store the token in the database
    user.jwt_token = token;
    await user.save();

    return res
      .status(201)
      .json({ message: "User created", userId: user.id, token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate a new JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET
    );

    // Store the new token in the database
    user.jwt_token = token;
    await user.save();

    return res.status(200).json({ message: "Login successful", token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};
// New function for logging out
const logoutUser = async (req, res) => {
  const { userId } = req;

  try {
    const user = await User.findByPk(userId);
    if (user) {
      user.jwt_token = null; // Invalidate the token
      await user.save();
      return res.status(200).json({ message: "Logged out successfully" });
    }
    return res.status(404).json({ message: "User not found" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

const getUserLists = async (req, res) => {
  try {
    // Fetch all users from the database (you can add filters here if needed)
    let limit = parseInt(req.query.limit, 10) || 10; // Default limit to 10
    let skip = parseInt(req.query.skip, 10) || 0; // Default skip to 0
    console.log(req.query, skip);

    const usersCount = (await User.findAll()).length;
    console.log("22222", req.body.password);

    const users = await User.findAll({
      attributes: [
        "user_id",
        "email",
        "first_name",
        "last_name",
        "phone_number",
        "shipping_address",
        "role",
        "password",
      ], // You can customize the fields to return
      where: {
        // Optional: add any filtering conditions here
        // is_active: true, // Example filter: only active users
      },
      limit: limit, // Limit the number of results
      offset: skip,
      order: [["created_at", "DESC"]], // Optional: order the results by creation date (most recent first)
    });

    // Send the response with the users' data
    return res.status(200).json({
      success: true,
      data: users,
      count: usersCount,
    });
  } catch (error) {
    console.error("Error fetching users:", error);
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve users.",
      error: error.message,
    });
  }
};
async function searchUser(req, res) {
  try {
    const { fromDate, toDate, keyword } = req.body;
    let queryConditions = {};

    // Handle the fromDate filter if provided
    if (fromDate) {
      const parsedFromDate = moment(fromDate);
      if (!parsedFromDate.isValid()) {
        return res.status(400).json({
          error:
            "Invalid fromDate format. Expected format: ISO 8601 (e.g., 2025-01-18T00:00:00.000Z)",
        });
      }
      queryConditions.created_at = {
        [Op.gte]: parsedFromDate.toDate(), // Greater than or equal to fromDate
      };
    }

    // Handle the toDate filter if provided
    if (toDate) {
      const parsedToDate = moment(toDate);
      if (!parsedToDate.isValid()) {
        return res.status(400).json({
          error:
            "Invalid toDate format. Expected format: ISO 8601 (e.g., 2025-01-18T00:00:00.000Z)",
        });
      }
      // If fromDate is also provided, ensure toDate is not before fromDate
      if (fromDate && moment(fromDate).isAfter(parsedToDate)) {
        return res
          .status(400)
          .json({ error: "From date cannot be after To date" });
      }
      queryConditions.created_at = {
        ...queryConditions.created_at,
        [Op.lte]: parsedToDate.toDate(), // Less than or equal to toDate
      };
    }

    // Handle the keyword search if provided
    if (keyword) {
      queryConditions[Op.or] = [
        { first_name: { [Op.like]: `%${keyword}%` } },
        { last_name: { [Op.like]: `%${keyword}%` } },
        { email: { [Op.like]: `%${keyword}%` } },
        { role: { [Op.like]: `%${keyword}%` } },
      ];
    }

    // Query the database based on the constructed queryConditions
    const users = await User.findAll({
      where: queryConditions,
    });

    if (users.length > 0) {
      return res.status(200).json({
        message: "Search completed successfully",
        users: users, // Return the found users
      });
    } else {
      return res
        .status(404)
        .json({ message: "No users found matching the search criteria" });
    }
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// async function searchUser(req, res) {
//   try {
//     const { fromDate, toDate, keyword } = req.body;
//     console.log("*****************", req.body);
//     // if (!fromDate || !toDate || !keyword) {
//     //   return res.status(400).json({
//     //     error: "Missing required parameters: fromDate, toDate, or keyword",
//     //   });
//     // }

//     const parsedFromDate = moment(fromDate); // moment parses ISO 8601 format natively
//     const parsedToDate = moment(toDate);

//     if (!parsedFromDate.isValid() || !parsedToDate.isValid()) {
//       return res.status(400).json({
//         error:
//           "Invalid date format. Expected format: ISO 8601 (e.g., 2025-01-18T00:00:00.000Z)",
//       });
//     }

//     if (parsedFromDate.isAfter(parsedToDate)) {
//       return res
//         .status(400)
//         .json({ error: "From date cannot be after To date" });
//     }

//     const formattedFromDate = parsedFromDate.toDate(); // Converts to native Date object
//     const formattedToDate = parsedToDate.toDate(); // Converts to native Date object

//     // Step 6: Query the database based on the date range and keyword
//     const users = await User.findAll({
//       where: {
//         // created_at: {
//         //   [Op.gte]: formattedFromDate, // Greater than or equal to fromDate
//         //   [Op.lte]: formattedToDate, // Less than or equal to toDate
//         // },
//         [Op.or]: [
//           { first_name: { [Op.like]: `%${keyword}%` } }, // Searching by name
//           { last_name: { [Op.like]: `%${keyword}%` } }, // Searching by name
//           { email: { [Op.like]: `%${keyword}%` } }, // Searching by email (adjust as per your fields)
//         ],
//       },
//     });

//     if (users.length > 0) {
//       return res.status(200).json({
//         message: "Search completed successfully",
//         users: users, // Return the found users
//       });
//     } else {
//       return res
//         .status(404)
//         .json({ message: "No users found matching the search criteria" });
//     }
//   } catch (error) {
//     // Step 8: Handle any unexpected errors
//     console.error("Error occurred:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// }

async function addUser(req, res) {
  try {
    const {
      firstName,
      lastName,
      role,
      email,
      password,
      phone,
      shipping_address,
    } = req.body;
    const userFound = await User.findOne({ where: { email } });
    if (userFound) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const user = await User.create({
      email,
      password,
      phone_number: phone,
      first_name: firstName,
      last_name: lastName,
      role: role,
      shipping_address,
    });

    // Generate a new JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET
    );

    // Store the token in the database
    user.jwt_token = token;
    await user.save();
    return res
      .status(201)
      .json({ message: "User created", userId: user.id, token });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
}
module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getUserLists,
  searchUser,
  addUser,
};
