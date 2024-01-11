import React, { useState } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]); // Stores chat messages

  const handleMessageSubmit = (message) => {
    setMessages([...messages, { text: message, user: 'Me' }]); // Add new message
    // Perform additional actions here, like sending message to server
  };

  return (
    <div className="chat-container">
      <ul className="message-list">
        {messages.map((message) => (
          <li key={message.text}>
            <span className="username">{message.user}:</span>
            <span className="message-text">{message.text}</span>
          </li>
        ))}
      </ul>
      <form className="message-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Type your message..." onChange={(e) => handleMessageChange(e.target.value)} />
        <button type="submit" onClick={() => handleMessageSubmit(messageInput)}>Send</button>
      </form>
    </div>
  );
}

export default Chat;
