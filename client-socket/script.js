const socket = io('http://localhost:3000/');

socket.on('connection', (msg) => {
    console.log(msg);

})

const form = document.getElementById("chatForm");
const input = document.getElementById("messageInput");
const messages = document.getElementById("messages");

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let msg = input.value;
  
    socket.emit('sendMsg', msg)

    socket.on('revMsg', (msg) => {
        
        const message = document.createElement("div");
        message.className = "message received";

        const text = document.createElement("div");
        text.textContent = msg;

        const time = document.createElement("div");
        time.className = "text-muted small mt-1";
        time.textContent = "10:32 AM";

        
        message.appendChild(text);
        message.appendChild(time);
        

        messages.appendChild(message)
    })
})