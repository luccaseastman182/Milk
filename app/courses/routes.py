from flask import Blueprint, render_template
from app.models import Course

courses = Blueprint('courses', __name__, url_prefix='/courses')

@courses.route('/')
def index():
    courses = Course.query.all()
    return render_template('courses/index.html', courses=courses)

@courses.route('/<int:course_id>')
def details(course_id):
    course = Course.query.get_or_404(course_id)
    return render_template('courses/details.html', course=course)
