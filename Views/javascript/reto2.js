function addLabelsToInputs() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        if (!input.id) return; // Skip inputs without an ID

        const label = document.createElement('label');
        label.setAttribute('for', input.id);


        if (input.id === 'username') {
            label.textContent = 'Username';
        } else if (input.id === 'password') {
            label.textContent = 'Password';
        } else if (input.id === 'confirmPassword') {
            label.textContent = 'Confirm Password';
        } else {
            label.textContent = input.id;
        }

        input.parentNode.insertBefore(label, input);
    });
}

function addValidationToInputs() {
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            let errorMessage = input.nextElementSibling;
            if (!errorMessage || !errorMessage.classList.contains('error-message')) {
                errorMessage = document.createElement('span');
                errorMessage.classList.add('error-message');
                errorMessage.style.color = 'red';
                input.parentNode.insertBefore(errorMessage, input.nextSibling);
            }

            if (!input.value.trim()) {
                errorMessage.textContent = '⚠️ Estos campos son requeridos ⚠️';
            } else {
                errorMessage.textContent = '';
            }
        });
    });
}

function validatePasswordMatch() {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    if (passwordInput && confirmPasswordInput) {
        confirmPasswordInput.addEventListener('blur', () => {
            let errorMessage = confirmPasswordInput.nextElementSibling;
            if (!errorMessage || !errorMessage.classList.contains('error-message')) {
                errorMessage = document.createElement('span');
                errorMessage.classList.add('error-message');
                errorMessage.style.color = 'red';
                confirmPasswordInput.parentNode.insertBefore(errorMessage, confirmPasswordInput.nextSibling);
            }

            if (passwordInput.value !== confirmPasswordInput.value) {
                errorMessage.textContent = '⚠️ Contraseña no coincide. ⚠️';
            } else {
                errorMessage.textContent = '';
            }
        });
    }
}

function toggleRegisterButton() {
    const registerButton = document.getElementById('registerButton');
    const inputs = document.querySelectorAll('input');

    function checkInputsValidity() {
        let allValid = true;

        inputs.forEach(input => {
            if (!input.value.trim() || (input.id === 'confirmPassword' && input.value !== document.getElementById('password').value)) {
                allValid = false;
            }
        });

        registerButton.disabled = !allValid;
    }

    inputs.forEach(input => {
        input.addEventListener('input', checkInputsValidity);
    });

    checkInputsValidity(); // Initial check
}

function handleRegisterButtonClick() {
    const registerButton = document.getElementById('registerButton');

    registerButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent form submission if inside a form

        const successMessage = document.createElement('p');
        successMessage.textContent = '✅ Registro exitoso ✅';
        successMessage.style.color = 'green';

        const form = registerButton.closest('form') || document.body;
        form.appendChild(successMessage);

        // Optionally, clear inputs after registration
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => input.value = '');
    });
}




// Llama a la función para agregar los labels
document.addEventListener('DOMContentLoaded', () => {
    addLabelsToInputs();
    addValidationToInputs();
    validatePasswordMatch();
    toggleRegisterButton();
    handleRegisterButtonClick();
});