import CHatboticon from "./CHatboticon";

const ChatMessage = ({ chat }) => {
  return (
    <div className={`message ${chat.role === "model" ? "bot" : "user"}-message`}>
      {chat.role === "model" && <CHatboticon/>}  
      <p className="message-text">{chat.text}</p>
    </div>
  );
};

export default ChatMessage;
