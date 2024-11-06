/**
 * Middleware for handling and logging errors.
 */

/**
 * Middleware function for handling errors.
 * @param {Error} err - The error object.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {Function} next - The next middleware function.
 */
function errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
}

/**
 * Middleware function for logging errors.
 * @param {Error} err - The error object.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {Function} next - The next middleware function.
 */
function logErrors(err, req, res, next) {
    console.error(err.stack);
    next(err);
}

module.exports = {
    errorHandler,
    logErrors
};
