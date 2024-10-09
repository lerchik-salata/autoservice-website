function sendMessage(user) {
    const chatBox = document.getElementById('chat-box');
    let inputField;
    let messageClass;

    if (user === 1) {
        inputField = document.getElementById('user1-input');
        messageClass = 'user1';
    } else if (user === 2) {
        inputField = document.getElementById('user2-input');
        messageClass = 'user2';
    }

    const messageText = inputField.value.trim();

    if (messageText !== "") {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', messageClass);
        messageElement.textContent = messageText;

        chatBox.appendChild(messageElement);

        inputField.value = '';
    }
}
