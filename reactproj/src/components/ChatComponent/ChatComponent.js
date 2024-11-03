import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ChatComponent.module.css";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const sender = localStorage.getItem("userId");
  const socketRef = useRef(null);
  const isConnected = useRef(false);

  useEffect(() => {
    if (sender && !isConnected.current) {
      socketRef.current = io("http://localhost:3005", {
        transports: ["websocket"],
      });

      socketRef.current.on("connection", () => {
        console.log("Socket connected:", socketRef.current.id);
        isConnected.current = true;
      });

      socketRef.current.on("connect_error", (error) => {
        console.log("Socket connection error:", error);
      });

      const fetchMessages = async () => {
        try {
          const response = await fetch("http://localhost:3005/messages");
          const data = await response.json();
          setMessages(data);
        } catch (error) {
          console.error("Error fetching messages:", error);
        }
      };

      fetchMessages();

      socketRef.current.on("receiveMessage", (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });

      return () => {
        socketRef.current.off("receiveMessage");
        socketRef.current.disconnect();
        isConnected.current = false;
      };
    }
  }, [sender]);

  const sendMessage = () => {
    if (!socketRef.current || newMessage.trim() === "") return;
    const messageData = { sender, content: newMessage, timestamp: new Date() };
    socketRef.current.emit("sendMessage", messageData);
    setNewMessage("");
  };

  const getUserColor = (userId) => {
    let hash = 0;
    for (let i = 0; i < userId.length; i++) {
      hash = userId.charCodeAt(i) + ((hash << 5) - hash);
    }
    const color = `hsl(${hash % 360}, 50%, 50%)`;
    return color;
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.header}>
        <h3>JUDICIAL JUNCTION</h3>
      </div>
      <div className={styles.messagesContainer}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={msg.sender === sender ? styles.userBubble : styles.otherUserBubble}
          >
            <i
              className="bi bi-person-circle"
              style={{
                color: getUserColor(msg.sender),
                fontSize: "1.2rem",
                marginRight: "8px",
                verticalAlign: "middle",
              }}
            ></i>
            <span className={styles.senderId}>{msg.sender}: </span>
            <span className={styles.messageContent}>{msg.content}</span>
            <span className={styles.timestamp}>{new Date(msg.timestamp).toLocaleString()}</span>
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.inputField}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} className={styles.sendButton}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
