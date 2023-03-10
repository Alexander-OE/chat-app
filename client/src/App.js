import { Routes, Route } from "react-router-dom";
import Home from './components/Home';
import { useNavigate } from "react-router-dom";
// import ChatPage from "./components/ChatPage";
import ChatPage from "./components/ChatPage"
import socketIO from "socket.io-client";

const socket = socketIO.connect("http://localhost:4000");
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home socket={socket} />}></Route>
        <Route path="/chat" element={<ChatPage socket={socket} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
