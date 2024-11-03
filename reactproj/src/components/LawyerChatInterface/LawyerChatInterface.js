import React, { useState } from "react";
import ConversationList from "../ConversationList/ConversationList";
import ChatComponent from "../ChatComponent/ChatComponent";

const LawyerChatInterface = ({ lawyerId }) => {
  const [selectedClient, setSelectedClient] = useState(null);

  return (
    <div className="chat-interface">
      <ConversationList lawyerId={lawyerId} onSelectClient={setSelectedClient} />
      {selectedClient && (
        <ChatComponent sender={lawyerId} receiver={selectedClient.id} />
      )}
    </div>
  );
};

export default LawyerChatInterface;

