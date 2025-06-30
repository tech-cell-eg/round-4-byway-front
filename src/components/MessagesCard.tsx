import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Conversation  {
  name: string;
  id:number;
  image: string;
  lastMessage: string;
  date: string;
}
interface MessagesCardProps {
  conversations: Conversation[];
  selectedId: number | null;
  onSelect: (id: number) => void;
}

const MessagesCard: React.FC<MessagesCardProps> = ({
conversations,
  selectedId,
  onSelect,
}) => {
  return (
    <div className="flex flex-col w-full gap-4">
      {conversations.map((conv) => (
        <div
          key={conv.id}
          onClick={() => onSelect(conv.id)}
          className={`flex justify-between items-start p-4 rounded-lg cursor-pointer border transition ${
            selectedId === conv.id ? "border-blue-500 bg-blue-50" : "border border-gray-200"
          }`}
        >
          <div className="flex gap-3">
            <Avatar>
              <AvatarImage src={conv.image} />
              <AvatarFallback>{conv.name[0]}</AvatarFallback>
            </Avatar>
            <div className='flex flex-col gap-2'>
              <p className="font-semibold text-gray-900">{conv.name}</p>
              <p className="text-sm text-gray-600 max-w-xs truncate">{conv.lastMessage}</p>
            </div>
          </div>
          <span className="text-xs text-muted-foreground mt-1">{conv.date}</span>
        </div>
      ))}
    </div>
  );
};

export default MessagesCard;
