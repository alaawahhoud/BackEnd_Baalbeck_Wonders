const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const adminModel = require('../models/adminModel');


const initIsLogin = async (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log(decoded);

        // Find the user by ID
        const user = await adminModel.findOne({ _id:decoded.id});
        console.log({user});

        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }

        req.user = user; // Attach the user object to the request
        return user;
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: 'Invalid token.' });
    }
};

const isLogin = async (req, res, next) => {
    const user = await initIsLogin(req, res, next);
    if (user) {
        return next();
    }
};

const isUser = async (req, res, next) => {
    const user = await initIsLogin(req, res, next);
    if (user && user.role === 'user') {
        return next();
    } else {
        return res.status(403).json({ states: false, message: 'Access denied. User role required.' });
    }
};

const isAdmin = async (req, res, next) => {
    const user = await initIsLogin(req, res, next);
    if (user && user.role === 'admin') {
        return next();
    } else {
        return res.status(403).json({ states: false, message: 'Access denied. Admin role required.' });
    }
};

module.exports = { isLogin, isUser, isAdmin };
