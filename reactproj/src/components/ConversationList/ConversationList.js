import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ConversationList.module.css"; // Custom styles

const ConversationList = ({ lawyerId, onSelectClient }) => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(`/api/clients/${lawyerId}`);
        setClients(response.data);
      } catch (error) {
        console.error("Error fetching clients:", error);
      }
    };
    fetchClients();
  }, [lawyerId]);

  return (
    <div className={styles.conversationList}>
      {clients.map((client) => (
        <div
          key={client.id}
          className={styles.clientItem}
          onClick={() => onSelectClient(client)}
        >
          <img 
            src={client.avatarUrl} // Assuming each client has an avatar URL
            alt={`${client.name}'s avatar`}
            className={styles.clientAvatar} // Add appropriate styles
          />
          <div className={styles.clientInfo}>
            <h4>{client.name}</h4>
            {/* You can show the latest message or timestamp here */}
            <p className={styles.latestMessage}>
              {/* Replace this with the latest message if available */}
              {client.latestMessage || "No messages yet"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConversationList;

