const express = require('express');
const router = express.Router();
const Course = require('../models/Course');
const { generateCourseId, getCourseById } = require('../courses/course');

// Route for creating a new course
router.post('/create', async (req, res) => {
    const { title, description, price } = req.body;
    const courseId = generateCourseId();

    const newCourse = new Course({
        id: courseId,
        title,
        description,
        price
    });

    try {
        await newCourse.save();
        res.status(201).json({ message: 'Course created successfully', course: newCourse });
    } catch (error) {
        res.status(500).json({ message: 'Error creating course', error });
    }
});

// Route for updating an existing course
router.put('/update/:id', async (req, res) => {
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

// Route for deleting a course
router.delete('/delete/:id', async (req, res) => {
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

// Route for retrieving a course by its identifier
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const course = await getCourseById(id);
        if (!course) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.status(200).json({ course });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving course', error });
    }
});

module.exports = router;
