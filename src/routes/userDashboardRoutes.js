const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Course = require('../models/Course');
const authMiddleware = require('../middleware/authMiddleware');

// Route for displaying user dashboard
router.get('/dashboard', authMiddleware.isRegistered, async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving user data', error });
    }
});

// Route for updating user profile information
router.put('/profile', authMiddleware.isRegistered, async (req, res) => {
    const { email, name } = req.body;

    try {
        const user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.email = email;
        user.name = name;

        await user.save();
        res.status(200).json({ message: 'Profile updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error updating profile', error });
    }
});

// Route for displaying purchased courses
router.get('/courses', authMiddleware.isRegistered, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).populate('purchasedCourses');
        res.json({ courses: user.purchasedCourses });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving purchased courses', error });
    }
});

module.exports = router;
