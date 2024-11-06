# Milk

## Project Description

The National Academy of Business Sciences (NABS) website is a Flask-based web application that provides user authentication, protected routes, dynamic layouts, and integration for Clerk-like features and Stripe for payments. The project is structured to ensure scalability and security.

## File Tree Structure

```
/ ─── .env                           # Environment variables for Clerk-like auth and other secrets
    ├── /app
    │   ├── __init__.py              # Flask app initialization
    │   ├── config.py                # Configurations for the Flask app, environment variables, and database
    │   ├── routes.py                # Main routes for the application
    │   ├── models.py                # SQLAlchemy models for database tables (e.g., Users, Courses)
    │   ├── /admin                   # Admin-specific routes and functionality
    │   │   ├── __init__.py
    │   │   ├── routes.py            # Admin routes (user management, course management)
    │   │   └── templates
    │   │       └── admin
    │   │           ├── dashboard.html         # Admin dashboard HTML
    │   │           ├── users.html             # Admin manage users page
    │   │           ├── edit_user.html         # Admin edit user page
    │   │           ├── courses.html           # Admin manage courses
    │   │           └── edit_course.html       # Admin edit course page
    │   ├── /auth                    # Authentication and authorization functions
    │   │   ├── __init__.py
    │   │   ├── routes.py            # Routes for login, registration, and password reset
    │   │   ├── forms.py             # WTForms for login, registration, password reset
    │   │   └── templates
    │   │       └── auth
    │   │           ├── login.html             # Login page
    │   │           ├── register.html          # Registration page
    │   │           └── reset_password.html    # Password reset page
    │   ├── /courses                 # Course-related routes and templates
    │   │   ├── __init__.py
    │   │   ├── routes.py            # Routes for listing and viewing courses
    │   │   └── templates
    │   │       └── courses
    │   │           ├── index.html             # All courses page
    │   │           ├── details.html           # Course details page
    │   │           ├── enroll.html            # Course enrollment page
    │   │           └── curriculum.html        # Curriculum for the course
    │   ├── /dashboard               # User dashboard and profile management
    │   │   ├── __init__.py
    │   │   ├── routes.py            # Routes for user dashboard, profile, and settings
    │   │   └── templates
    │   │       └── dashboard
    │   │           ├── index.html             # Dashboard homepage
    │   │           ├── profile.html           # User profile page
    │   │           └── settings.html          # Account settings page
    │   ├── /templates                # Shared templates and components
    │   │   ├── base.html             # Base template with Clerk-like authentication and Stripe integration
    │   │   ├── navigation.html       # Main navigation bar with conditional rendering based on auth status
    │   │   └── footer.html           # Site-wide footer
    │   ├── /static                   # Static files like CSS, JS, and images
    │   │   ├── /css
    │   │   │   ├── main.css          # Main CSS file for styling
    │   │   │   └── tailwind.css      # Tailwind CSS entry point
    │   │   ├── /js
    │   │   │   ├── main.js           # Main JavaScript file
    │   │   │   └── auth.js           # JS for auth logic, e.g., conditional rendering
    │   │   └── /images               # Images for the website
    ├── /migrations                   # Flask-Migrate files for database migrations
    ├── requirements.txt              # Project dependencies
    ├── config.py                     # Configuration file for the app
    ├── wsgi.py                       # WSGI entry point for deployment
    └── run.py                        # Script to run the application
```

## Setup Instructions

1. Clone the repository:
   ```sh
   git clone https://github.com/luccaseastman182/Milk.git
   cd Milk
   ```

2. Create a virtual environment and activate it:
   ```sh
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install the dependencies:
   ```sh
   pip install -r requirements.txt
   ```

4. Set up the environment variables:
   ```sh
   cp .env.example .env
   ```

5. Initialize the database:
   ```sh
   flask db init
   flask db migrate
   flask db upgrade
   ```

6. Run the application:
   ```sh
   flask run
   ```

## Usage Examples

- Access the home page at `http://127.0.0.1:5000/`
- Register a new user at `http://127.0.0.1:5000/auth/register`
- Log in at `http://127.0.0.1:5000/auth/login`
- Access the admin dashboard at `http://127.0.0.1:5000/admin/dashboard`

## Contribution Guidelines

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License.
