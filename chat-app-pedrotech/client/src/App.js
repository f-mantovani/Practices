import "./App.css";
import io from "socket.io-client";
import { useState } from "react";
import Chat from "./Chat";

const socket = io.connect(process.env.REACT_APP_URL);

function App() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (username === "" && room === "") return;
    socket.emit("join_room", room);
    setShowChat(true);
  };

  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h3>Join Chat</h3>
          <input
            type="text"
            placeholder="John..."
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="RoomID..."
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={joinRoom}>Join a Room</button>
        </div>
      ) : (
        <Chat socket={socket} username={username} room={room} />
      )}
    </div>
  );
}

export default App;
