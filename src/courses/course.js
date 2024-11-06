const { v4: uuidv4 } = require('uuid');
const Course = require('../models/Course');

/**
 * Generates a unique identifier for a course.
 * @returns {string} - A unique identifier.
 */
function generateCourseId() {
    return uuidv4();
}

/**
 * Assigns unique identifiers to existing courses.
 * @param {Array} courses - An array of course objects.
 * @returns {Array} - An array of course objects with unique identifiers.
 */
function assignCourseIds(courses) {
    return courses.map(course => {
        course.id = generateCourseId();
        return course;
    });
}

/**
 * Retrieves a course by its identifier.
 * @param {string} courseId - The unique identifier of the course.
 * @returns {Object|null} - The course object if found, otherwise null.
 */
async function getCourseById(courseId) {
    try {
        const course = await Course.findById(courseId);
        return course ? course : null;
    } catch (error) {
        console.error('Error retrieving course by ID:', error);
        return null;
    }
}

module.exports = {
    generateCourseId,
    assignCourseIds,
    getCourseById
};
