import { io } from "socket.io-client"


const joinRoomBtn = document.getElementById('room-btn');
const msgInput = document.getElementById('msg-input');
const roomInput = document.getElementById('room-input');
const form = document.getElementById('form');

const socket = io('http://localhost:3000')

form.addEventListener("submit", e => {
    e.preventDefault();
    const msg = msgInput.value;
    const room = roomInput.value;
    
    if (msg === "") return
    displayMsg(msg);
    
    msgInput.value = "";
})

joinRoomBtn.addEventListener("click", () => {
    const room = roomInput.value;
})

function displayMsg(msg) {
    const div = document.createElement("div");
    div.textContent = msg;
    document.getElementById("msg-container").append(div);
}