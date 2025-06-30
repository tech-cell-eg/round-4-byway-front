import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface MessageChatProps {
  onSend: (text: string) => void;
}

const MessageChat: React.FC<MessageChatProps> = ({ onSend }) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim() === '') return;
    onSend(text);
    setText('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="border-t border-[#E2E8F0] p-4 flex items-center gap-2">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Type Your Message"
        className="flex-1 flex shadow-none h-12 max-w-[811px] border border-[#E2E8F0]  p-4 gap-2"
      />
      <Button onClick={handleSend} className="h-12 py-2.5 px-6 flex gap-1.5 bg-[#3B82F6] text-white text-sm font-medium rounded-b-lg">
        Send
      </Button>
    </div>
  );
};

export default MessageChat;
