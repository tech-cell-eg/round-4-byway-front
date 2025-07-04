import React, { useState } from 'react'
import ProfileHeader from './ProfileHeader'
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import MessagesCard from './MessagesCard';

import ChatView from './ChatView';
const dummyConversations = [
  {
    id: 1,
    name: 'Ronald Richards',
    image: '/ronald.jpg',
    lastMessage: "Thank you for asking your doubt, I’ll send you a pdf file...",
    date: "18th March, 2024",
    messages: [
      { id: 1, text: "Hello", sender: "me", time: "10:25 am" },
      { id: 2, text: "Just wanted to tell you that i started your course and its going great!!", sender: "me", time: "10:25 am" },
      { id: 3, text: "Hello! Thank you for reaching out to me...", sender: "instructor", time: "12:23 pm" },
      { id: 4, text: "Yes Sure", sender: "me", time: "10:25 am" },
    ],
  },
  {
    id: 2,
    name: 'Devon Lane',
    image: '/devon.jpg',
    lastMessage: "I’ll Get back to you as soon as possible.",
    date: "18th March, 2024",
    messages: [],
  },
];

const Messages = () => {
      const [selectedRating, setSelectedRating] = useState<number | null>(null);
            const [selectedChapters, setSelectedChapters] = useState<string[]>([]);
            const [searchQuery, setSearchQuery] = useState('');
        const [selectedId, setSelectedId] = useState<number | null>(null);


  const selectedConversation = dummyConversations.find((c) => c.id === selectedId);

  const handleSendMessage = (text: string) => {
    if (!selectedConversation) return;
    selectedConversation.messages.push({
      id: Date.now(),
      text,
      sender: "me",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
    setSelectedId(selectedId); // Force re-render
  };
  return (
    <div className='flex flex-col flex-1 gap-4 container mx-auto'>
      <ProfileHeader 
       title="Messages"
        count={dummyConversations.length}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        selectedChapters={selectedChapters}
        setSelectedChapters={setSelectedChapters}>
        <div className="relative w-[300px]">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            className="w-[300px] min-h-11 border border-[#E2E8F0] gap-2 rounded-lg p-2.5"
            placeholder="Search User"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
</ProfileHeader>

 <div className="flex flex-col w-full max-w-4xl mx-auto">
      {selectedConversation ? (
  <ChatView
    selectedConversation={selectedConversation}
    onBack={() => setSelectedId(null)}
    onSendMessage={handleSendMessage}
  />
) : (
  <div className="flex flex-col gap-4">
    <MessagesCard
      conversations={dummyConversations}
      selectedId={selectedId}
      onSelect={setSelectedId}
    />
    <div className="flex items-center justify-center h-full text-gray-400">
      Select a conversation to start messaging.
    </div>
  </div>
)}

    </div>
    </div>
  )
}

export default Messages