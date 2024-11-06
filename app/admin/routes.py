from flask import Blueprint, render_template, redirect, url_for, flash
from app.models import User, Course
from app import db

bp = Blueprint('admin', __name__)

@bp.route('/dashboard')
def dashboard():
    return render_template('admin/dashboard.html')

@bp.route('/users')
def manage_users():
    users = User.query.all()
    return render_template('admin/users.html', users=users)

@bp.route('/courses')
def manage_courses():
    courses = Course.query.all()
    return render_template('admin/courses.html', courses=courses)
