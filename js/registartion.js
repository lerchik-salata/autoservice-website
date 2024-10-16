
function validateInput(input) {
    const fileContainer = input.closest('.field-container');
    const errorBlock = fileContainer.querySelector('.error');
    errorBlock.style.display = 'none';

    let isValid = true;

    if (!input.value) {
        isValid = false;
        errorBlock.style.display = 'block';
    }

    if (input.id === 'phone') {
        const phoneValue = input.value.replace(/\D/g, '');
        const phonePattern = /^38\d{10}$/; 
        if (phoneValue && !phonePattern.test(phoneValue)) {
            isValid = false;
            errorBlock.style.display = 'block';
        }
    }

    if (input.type === 'email') {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (input.value && !emailPattern.test(input.value)) {
            isValid = false;
            errorBlock.style.display = 'block';
        }
    }

    if (input.type === 'password') {
        const passwordInputs = form.querySelectorAll('input[type="password"]');
        const password = passwordInputs[0].value;
        const confirmPassword = passwordInputs[1].value;
        if (input === passwordInputs[1] && password !== confirmPassword) {
            isValid = false;
            errorBlock.style.display = 'block'; 
        }
    }

    return isValid;
}

$(document).ready(function() {
    const phoneInput = $('#phone');
    phoneInput.inputmask("+38(999)-999-99-99"); 

    phoneInput.on('input', function() {
        validateInput(this); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form');

    const inputs = form.querySelectorAll('input[required], select[required]');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            validateInput(this); 
        });
    });

    const fileInput = document.getElementById('file-upload');
        const fileNameDisplay = document.querySelector('.custom-file-upload');

        fileInput.addEventListener('change', function() {
            if (fileInput.files.length > 0) {
                const fileName = fileInput.files[0].name; 
                fileNameDisplay.textContent = fileName; 
            } else {
                fileNameDisplay.textContent = 'Select file'; 
            }
        });
});