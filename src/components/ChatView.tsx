import React from 'react';
import { ArrowLeft } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import MessageChat from './MessageChat';

interface ChatViewProps {
  selectedConversation: {
    id: number;
    name: string;
    image: string;
    messages: {
      id: number;
      text: string;
      sender: "me" | "instructor";
      time: string;
    }[];
  };
  onBack: () => void;
  onSendMessage: (text: string) => void;
}

const ChatView: React.FC<ChatViewProps> = ({ selectedConversation, onBack, onSendMessage }) => {
  return (
    <div className="flex flex-col h-full border border-[#E2E8F0] rounded-2xl">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#E2E8F0] p-6">
        <div className="flex items-center gap-2">
          <ArrowLeft onClick={onBack} className="cursor-pointer w-6 h-6" />
          <Avatar>
            <AvatarImage src={selectedConversation.image} />
            <AvatarFallback>{selectedConversation.name[0]}</AvatarFallback>
          </Avatar>
          <span className="font-semibold text-gray-900">{selectedConversation.name}</span>
        </div>
        <span className="font-bold">...</span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {selectedConversation.messages.map((msg) => (
          <div key={msg.id} className={`max-w-[75%] px-4 py-2 rounded-lg text-sm ${msg.sender === 'me' ? 'ml-auto bg-[#1e293b] text-white' : 'bg-gray-100 text-gray-900'}`}>
            {msg.text}
            <div className="text-[10px] text-right mt-1 text-gray-500">{msg.time}</div>
          </div>
        ))}
      </div>

      {/* Input */}
      <MessageChat onSend={onSendMessage} />
    </div>
  );
};

export default ChatView;
