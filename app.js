// app.js
const rooms = [];

function createRoom() {
    const roomCode = generateRoomCode();
    rooms.push({ code: roomCode, players: [] });

    displayRoomSection(roomCode);
}

function joinRoom() {
    const roomCodeInput = document.getElementById("roomCodeInput");
    const playerNameInput = document.getElementById("playerNameInput");
    const roomCode = roomCodeInput.value.toUpperCase();
    const playerName = playerNameInput.value.trim();
// console.log(rooms)
console.log(roomCode)
    if (roomCode && playerName) {
        const room = rooms.find(r => r.code === roomCode);
        if (room) {
            room.players.push(playerName);
            displayRoomSection(roomCode);
        } else {
            alert("Invalid room code. Please try again.");
        }
    } else {
        alert("Please enter both room code and your name.");
    }
}

function generateRoomCode() {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
}

function displayRoomSection(roomCode) {
    document.getElementById("joinSection").style.display = "none";
    document.getElementById("roomSection").style.display = "block";
    document.getElementById("roomCodeDisplay").textContent = roomCode;

    const playerList = document.getElementById("playerList");
    playerList.innerHTML = "";
    
    const room = rooms.find(r => r.code === roomCode);
    room.players.forEach(player => {
        const li = document.createElement("li");
        li.textContent = player;
        playerList.appendChild(li);
    });
}
