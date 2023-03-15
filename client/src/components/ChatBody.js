import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatBody = ({ messages, lastMessageRef }) => {
  const navigate = useNavigate();

  const handleLeaveChat = () => {
    localStorage.removeItem('userName');
    navigate('/');
    window.location.reload();
  };

  return (
    <>
      <div>
        ......
        {/* --- At the bottom of the JSX element ----*/}
        <div ref={lastMessageRef} />
      </div>
    </>
  );
};

export default ChatBody;