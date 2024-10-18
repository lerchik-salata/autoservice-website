document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.querySelector('input[placeholder="First Name"]').value;
    const lastName = document.querySelector('input[placeholder="Last Name"]').value;
    const phone = document.querySelector('input[placeholder="Phone"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    const group = document.querySelector('select').value;
    const dob = document.querySelector('input[type="date"]').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const fileInput = document.querySelector('input[type="file"]');

    if (firstName === '' || lastName === '' || phone === '' || email === '' || group === '' || dob === '' || !gender) {
        alert('Please, fill in all fields');
        return;
    }

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
