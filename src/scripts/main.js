document.addEventListener('DOMContentLoaded', function() {
    // Add event listeners for user interactions
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});

function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const errors = validateFormData(formData);

    if (errors.length > 0) {
        displayErrorMessages(errors);
    } else {
        // Process form submission
        console.log('Form submitted successfully');
    }
}

function validateFormData(formData) {
    const errors = [];
    for (const [key, value] of formData.entries()) {
        if (!value) {
            errors.push(`${key} is required`);
        }
    }
    return errors;
}

function displayErrorMessages(errors) {
    const errorContainer = document.getElementById('error-messages');
    if (errorContainer) {
        errorContainer.innerHTML = '';
        errors.forEach(error => {
            const errorElement = document.createElement('p');
            errorElement.textContent = error;
            errorContainer.appendChild(errorElement);
        });
    }
}
