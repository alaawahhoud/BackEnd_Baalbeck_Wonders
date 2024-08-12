const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
       // match: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
    
    },
    email: {
        type: String,
        unique: [true,"Please provide an Email! "],
        required: [true," Email Exist"],
        match: /.+\@.+\..+/,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    fullname: {
        type: String,
      },
      accountstatus: {
        type: String,
        enum: ['active', 'suspended'],
        default: 'active'
      },
      emailVerified: {
        type: Boolean,
        default: false
      },
      createdAt: {
        type: Date,
        default: Date.now
      },
      updatedAt: {
        type: Date,
        default: Date.now
      },

      role: {
        type: String,
        enum: ['user', 'admin'],
        required: true,
    },
      
});

const User = mongoose.model('User', userSchema);

module.exports = User;
