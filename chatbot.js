document.getElementById('sendmsg').addEventListener('click', sendMessage);

async function sendMessage() {
    const usermsg = document.getElementById('usermsg').value;
    if (usermsg.trim() === '') return;

    displayMessage('User', usermsg);
    document.getElementById('usermsg').value = '';

    const response = await fetch('/chat', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: usermsg }),
    });

    const data = await response.json();
    displayMessage('Bot', data.text);
}

function displayMessage(sender, message) {
    const chatlog = document.getElementById('chatlog');
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message';
    msgDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatlog.appendChild(msgDiv);
    chatlog.scrollTop = chatlog.scrollHeight;
}
