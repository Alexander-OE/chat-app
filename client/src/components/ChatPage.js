import { useNavigate } from "react-router-dom";

const ChatPage = () => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem("userName");
    navigate("/");
    window.location.reload();
  };
  return (
    <>
      <header className="chat__mainHeader">
        <p>Handgout with Colleagues</p>
        <button className="leaveChat__btn" onClick={handleLeaveChat}>
          LEAVE CHAT
        </button>
      </header>

      {/* This shows messages sent from you */}
      <div className="message__container">
        <div className="message__chats">
          <p className="sender__name">You</p>
          <div className="message__sender">
            <p>Hello there</p>
          </div>
        </div>
      </div>

      {/* This shows messages recevied by you */}

      <div className="message__chats">
        <p>Other</p>
        <div className="message__recipient">
          <p>Hey, I'm good, you ?</p>
        </div>
      </div>

      {/* Thisis triggered when a user is typing */}
      <div className="message__status">
        <p>Someone is typing....</p>
      </div>
    </>
  );
};

export default ChatPage;
