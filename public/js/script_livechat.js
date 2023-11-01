const chatForm = document.getElementById("chat-form");
const chatMessages = document.querySelector(".chat-messages");
const roomName = document.getElementById("room-name");
const userList = document.getElementById("users");
const leave_btn = document.getElementById("leave-btn");

const { username, admin } = Qs.parse(location.search, {
    ignoreQueryPrefix: true,
});

const socket = io();

socket.emit('joinRoom', { username, admin });

socket.on('message', message => {
    outputMessage(message);
    chatMessages.scrollTop = chatMessages.scrollHeight;
});

chatForm.addEventListener('submit', e => {
    e.preventDefault();
    const msg = e.target.elements.msg.value;
    socket.emit('chatMessage', msg);
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
});

// Leave Button click
leave_btn.addEventListener('click', () => {
    const msg = `${username} has left the chat`;
    socket.emit('chatMessage', msg);
});

// Output message to DOM
function outputMessage(message) {
    const div = document.createElement('div');
    div.classList.add('message');
    div.innerHTML = `<p class="meta">${message.username}
                    <span>${message.time}</span></p>
                    <p class="text">
                    ${message.text}
                    </p>`;
    document.querySelector('.chat-messages').appendChild(div);
}
