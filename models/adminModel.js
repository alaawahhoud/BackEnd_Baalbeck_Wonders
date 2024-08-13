const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    //match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/, 
  },
  
  email: {
    type: String,
    required: true,
    unique: true,
     match: /.+\@.+\..+$/,
  // validate: [validator.isEmail, 'Invalid email format'],
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    required: true,
    default:"user",
},
 
  firstName: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now
    
},
lastLogin: {
    type: Date,
  },
  // Add more fields as needed
},{ timestamps: true } 
);

module.exports = mongoose.model("Admin", adminSchema);
