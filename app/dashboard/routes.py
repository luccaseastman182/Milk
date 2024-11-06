from flask import Blueprint, render_template, redirect, url_for, flash, request, session
from app.models import User
from app import db

bp = Blueprint('dashboard', __name__)

@bp.route('/')
def index():
    user_id = session.get('user_id')
    if not user_id:
        return redirect(url_for('auth.login'))
    user = User.query.get(user_id)
    return render_template('dashboard/index.html', user=user)

@bp.route('/profile', methods=['GET', 'POST'])
def profile():
    user_id = session.get('user_id')
    if not user_id:
        return redirect(url_for('auth.login'))
    user = User.query.get(user_id)
    if request.method == 'POST':
        user.email = request.form['email']
        db.session.commit()
        flash('Profile updated successfully')
        return redirect(url_for('dashboard.profile'))
    return render_template('dashboard/profile.html', user=user)

@bp.route('/settings', methods=['GET', 'POST'])
def settings():
    user_id = session.get('user_id')
    if not user_id:
        return redirect(url_for('auth.login'))
    user = User.query.get(user_id)
    if request.method == 'POST':
        user.password = request.form['password']
        db.session.commit()
        flash('Settings updated successfully')
        return redirect(url_for('dashboard.settings'))
    return render_template('dashboard/settings.html', user=user)
