const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Course = require('../models/Course');
const authMiddleware = require('../middleware/authMiddleware');

// Route for displaying admin dashboard
router.get('/dashboard', authMiddleware.isAdmin, async (req, res) => {
    try {
        const users = await User.find();
        const courses = await Course.find();
        res.json({ users, courses });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving admin data', error });
    }
});

// Route for managing users
router.get('/users', authMiddleware.isAdmin, async (req, res) => {
    try {
        const users = await User.find();
        res.json({ users });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error });
    }
});

router.put('/users/:id', authMiddleware.isAdmin, async (req, res) => {
    const { id } = req.params;
    const { email, role } = req.body;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.email = email;
        user.role = role;

        await user.save();
        res.status(200).json({ message: 'User updated successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error });
    }
});

router.delete('/users/:id', authMiddleware.isAdmin, async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        await user.remove();
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error });
    }
});

// Route for managing courses
router.get('/courses', authMiddleware.isAdmin, async (req, res) => {
    try {
        const courses = await Course.find();
        res.json({ courses });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving courses', error });
    }
});

router.put('/courses/:id', authMiddleware.isAdmin, async (req, res) => {
    const { id } = req.params;
    const { title, description, price } = req.body;

    try {
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        course.title = title;
        course.description = description;
        course.price = price;

        await course.save();
        res.status(200).json({ message: 'Course updated successfully', course });
    } catch (error) {
        res.status(500).json({ message: 'Error updating course', error });
    }
});

router.delete('/courses/:id', authMiddleware.isAdmin, async (req, res) => {
    const { id } = req.params;

    try {
        const course = await Course.findById(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        await course.remove();
        res.status(200).json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting course', error });
    }
});

module.exports = router;
