const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const bcrypt = require("bcrypt");

const User = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true, // Make user_id the primary key
      autoIncrement: true, // Auto-increment if it's an integer
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone_number: {
      type: DataTypes.NUMBER,
      unique: true,
    },
    shipping_address: {
      type: DataTypes.STRING,
    },
    billing_address: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.ENUM("User", "Admin"),
    },
    jwt_token: {
      // Optional field to store JWT (Typically not stored, unless you want session tracking)
      type: DataTypes.STRING,
      defaultValue: null,
    },
    // ip_address: {
    //   type: DataTypes.STRING,
    //   defaultValue: null,
    // },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      // You can track updates by adding this field manually
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    // created_by: {
    //   type: DataTypes.STRING,
    //   defaultValue: null,
    // },
    // is_active: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: true,
    // },
  },
  {
    tableName: "users",
    timestamps: false, // Disabling Sequelize's default timestamp fields
  }
);

// Hash the password before creating a user
User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

// Optionally, hash password on update as well if password is modified
User.beforeUpdate(async (user) => {
  if (user.password && user.changed("password")) {
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
  }
});

// Sync the model with the database
sequelize
  .sync()
  .then(() => {
    console.log("User table created or already exists!");
  })
  .catch((err) => console.log("Error creating table:", err));

module.exports = User;
