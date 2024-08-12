const Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register a new admin
exports.registerAdmin = async (req, res) => {
  const { username, password, email, firstName } = req.body;

  try {
    // Check if username or email already exists
    let admin = await Admin.findOne({ username });
    if (admin) {
      return res.status(400).json({ message: "Username already exists" });
    }

    admin = await Admin.findOne({ email });
    if (admin) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new admin
    const admindata = await Admin.create({
      username,
      password: hashedPassword,
      email,
      firstName,
      createdAt: Date.now(),
    });

    console.log(admindata);

    res.status(201).json({ message: "Admin registered successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Admin login
exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find admin by email
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check if password matches
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: admin._id, username: admin.username, role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );
    
    res.header("x-auth-token", token);

    // Update lastLogin date
    admin.lastLogin = Date.now();
    await admin.save();

    res.status(200).json({
      message: "Login successful",
      token,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
        firstName: admin.firstName,
        lastLogin: admin.lastLogin,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update admin details
exports.updateAdmin = async (req, res) => {
  const { username, email, firstName } = req.body;

  try {
    // Find admin by ID
    const admin = await Admin.findById(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Update fields
    if (username) admin.username = username;
    if (email) admin.email = email;
    if (firstName) admin.firstName = firstName;

    await admin.save();
    res.status(200).json({ message: "Admin updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete an admin
exports.deleteAdmin = async (req, res) => {
  try {
    const admin = await Admin.findByIdAndDelete(req.params.id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    res.status(200).json({ message: "Admin deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
