import { useState, useEffect } from "react";

const ChatBar = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on("newUserResponse", (data) => setUsers(data));
  }, [socket, users]);

  return (
    <div className="chat__sidebar">
      Open Chat
      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div>
          {users.map((user) => (
            <p key={user.socketID}> {user.userName} </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatBar;
