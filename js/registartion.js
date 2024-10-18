
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

    if (input.type === 'date') {
        const today = new Date().toISOString().split('T')[0]; 
        input.setAttribute('min', today);
    
        if (input.value && input.value < today) {
            isValid = false;
            errorBlock.style.display = 'block';
        }
    }

    return isValid;
}

function validateAllInputs() {
    const inputs = document.querySelectorAll('input[required], select[required]');
    let allValid = true;

    inputs.forEach(input => {
        const isValid = validateInput(input);
        if (!isValid) {
            allValid = false;
        }
    });

    return allValid;
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

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    if (!validateAllInputs()) {
        alert('Please, fill in all fields correctly');
        return;
    }

    const firstName = document.querySelector('input[placeholder="First Name"]').value;
    const lastName = document.querySelector('input[placeholder="Last Name"]').value;
    const phone = document.querySelector('input[placeholder="Phone"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const group = document.querySelector('select').value;
    const dob = document.querySelector('input[type="date"]').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const fileInput = document.querySelector('input[type="file"]');

    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const checkboxCell = newRow.insertCell(0);
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkboxCell.appendChild(checkbox);

    newRow.insertCell(1).textContent = firstName;
    newRow.insertCell(2).textContent = lastName;
    newRow.insertCell(3).textContent = phone;
    newRow.insertCell(4).textContent = email;
    newRow.insertCell(5).textContent = group;
    newRow.insertCell(6).textContent = dob;
    newRow.insertCell(7).textContent = gender;

    document.getElementById('form').reset();
    fileInput.value = '';
});

function deleteRows() {
    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const checkboxes = table.querySelectorAll('input[type="checkbox"]');

    for (let i = checkboxes.length - 1; i >= 0; i--) {
        if (checkboxes[i].checked) {
            table.deleteRow(i);
        }
    }
}

function duplicateRows() {
    const table = document.getElementById('userTable').getElementsByTagName('tbody')[0];
    const checkboxes = table.querySelectorAll('input[type="checkbox"]');
    const selectedRows = [];

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            const rowData = [];
            for (let j = 0; j < table.rows[i].cells.length; j++) {
                rowData.push(table.rows[i].cells[j].textContent);
            }
            selectedRows.push(rowData);
        }
    }

    selectedRows.forEach((rowData) => {
        const newRow = table.insertRow();

        const checkboxCell = newRow.insertCell(0);
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkboxCell.appendChild(checkbox);

        for (let i = 1; i < rowData.length; i++) {
            const newCell = newRow.insertCell(i);
            newCell.textContent = rowData[i];
        }
    });
}
