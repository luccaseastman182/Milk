document.addEventListener('DOMContentLoaded', function() {
    const authStatus = document.getElementById('auth-status');
    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');

    if (authStatus && loginButton && logoutButton) {
        if (authStatus.value === 'authenticated') {
            loginButton.style.display = 'none';
            logoutButton.style.display = 'block';
        } else {
            loginButton.style.display = 'block';
            logoutButton.style.display = 'none';
        }
    }
});
