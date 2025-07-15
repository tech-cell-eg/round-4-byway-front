


import React, { useState, useEffect } from 'react';
import ProfileHeader from './ProfileHeader';

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import MessagesCard from './MessagesCard';
import ChatView from './ChatView';
import { toast } from "sonner";

interface Conversation {
  id: number;
  name: string;
  image: string | null;
  lastMessage: string;
  date: string;
  messages: { id: number; text: string; sender: 'me' | 'instructor'; time: string }[];
}

const Messages = () => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedChapters, setSelectedChapters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedConv, setSelectedConv] = useState<Conversation | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://round-4-lms-api.digital-vision-solutions.com/api/my-chats")
      .then(res => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((data: Conversation[]) => setConversations(data))
      .catch(() => toast.error("Failed to load chats"))
      .finally(() => setLoading(false));
  }, []);

  const filtered = conversations.filter(c =>
    c.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (id: number) => {
    const conv = conversations.find(c => c.id === id) || null;
    setSelectedConv(conv);
  };

  const handleSendMessage = (text: string) => {
    if (!selectedConv) return;
    const msg = {
      id: Date.now(),
      text,
      sender: "me" as const,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setConversations(prev =>
      prev.map(c =>
        c.id === selectedConv.id
          ? { ...c, messages: [...c.messages, msg], lastMessage: msg.text, date: msg.time }
          : c
      )
    );
    setSelectedConv(c => c && { ...c, messages: [...c.messages, msg], lastMessage: msg.text, date: msg.time });
  };

  return (
    <div className="flex flex-col flex-1 gap-4 container mx-auto">
      <ProfileHeader
        title="Messages"
        count={conversations.length}
        selectedRating={selectedRating}
        setSelectedRating={setSelectedRating}
        selectedChapters={selectedChapters}
        setSelectedChapters={setSelectedChapters}
      >
        <div className="relative w-[300px]">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            className="w-[300px] min-h-11 border border-[#E2E8F0] gap-2 rounded-lg p-2.5"
            placeholder="Search User"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </div>
      </ProfileHeader>

      <div className="flex flex-col w-full max-w-4xl mx-auto">
        {loading ? (
          <div className="text-center py-20">Loading...</div>
        ) : selectedConv ? (
          <ChatView
            selectedConversation={selectedConv}
            onBack={() => setSelectedConv(null)}
            onSendMessage={handleSendMessage}
          />
        ) : (
          <div className="flex flex-col gap-4">
            <MessagesCard
              conversations={filtered}
              selectedId={selectedConv?.id || null}
              onSelect={handleSelect}
            />
            <div className="flex items-center justify-center h-full text-gray-400">
              Select a conversation to start messaging.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
