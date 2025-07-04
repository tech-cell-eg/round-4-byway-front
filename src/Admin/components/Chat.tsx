import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const users = [
  { id: 1, name: "Veli Dincer", role: "Student", unreadCount: 0 },
  { id: 2, name: "Theresa Webb", role: "Student", unreadCount: 3 },
  { id: 3, name: "Eleanor Pena", role: "Student", unreadCount: 0 },
  { id: 4, name: "Jane Cooper", role: "Student", unreadCount: 0 },
  { id: 5, name: "Brooklyn Simmons", role: "Student", unreadCount: 0 },
  { id: 6, name: "Dianne Russell", role: "Student", unreadCount: 0 },
  { id: 7, name: "Floyd Miles", role: "Student", unreadCount: 0 },
];

const messagesData: Record<number, { sender: "me" | "user"; text: string; time: string }[]> = {
  1: [
    { sender: "user", text: "Hi I have Some Querries regarding 2nd Chaper", time: "40 mins ago" },
    { sender: "me", text: "Sure, Let me know what is issue?", time: "40 mins ago" },
  ],
};

export default function Messages() {
  const [selectedUserId, setSelectedUserId] = useState(1);
  const [newMessage, setNewMessage] = useState("");

  const selectedUser = users.find((u) => u.id === selectedUserId)!;
  const messages = messagesData[selectedUserId] || [];

  const handleSend = () => {
    if (!newMessage.trim()) return;
    messagesData[selectedUserId] = [
      ...(messagesData[selectedUserId] || []),
      { sender: "me", text: newMessage, time: "Just now" },
    ];
    setNewMessage("");
  };

  return (
    <div className="flex bg-white shadow-sm border rounded-lg overflow-hidden min-h-[90vh]">
      {/* Sidebar */}
      <div className="w-[260px] border-r px-4 py-6">
        <h2 className="text-xl font-semibold mb-5">Communication</h2>

        {/* Tabs */}
        <div className="flex space-x-4 text-sm font-medium border-b mb-4">
          <button className="py-2 text-gray-500">Reviews</button>
          <button className="py-2 text-blue-600 border-b-2 border-blue-600">Messages</button>
          <button className="py-2 text-gray-500">Notification</button>
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input placeholder="Search User" className="pl-3 pr-10 py-2" />
        </div>

        {/* User List */}
        <div className="overflow-y-auto space-y-2">
          {users.map((user) => (
            <div
              key={user.id}
              onClick={() => setSelectedUserId(user.id)}
              className={`p-3 rounded-lg cursor-pointer ${
                selectedUserId === user.id ? "bg-blue-100" : "hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm text-gray-500">{user.role}</div>
                </div>
                {user.unreadCount > 0 && (
                  <span className="bg-blue-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                    {user.unreadCount}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat */}
      <div className="flex-1 flex flex-col justify-between p-6">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-3">
          <div>
            <h3 className="font-semibold">{selectedUser.name}</h3>
            <p className="text-sm text-gray-500">{selectedUser.role}</p>
          </div>
          <div className="flex">
            <div className="flex gap-1.5 py-2.5 px-6 text-sm font-medium h-12 ">
            <button className="text-red-500 bg-transparent">Delete</button>
          </div>
          <div className="flex gap-1.5 py-2.5 px-6 text-sm font-medium h-12 ">
            <button className="text-blue-600 bg-transparent">Block</button>
          </div>
          </div>
          
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto py-6 space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[70%] px-4 py-2 rounded-lg text-sm ${
                  msg.sender === "me" ? "bg-gray-100 text-right" : "bg-transparent border"
                }`}
              >
                <p>{msg.text}</p>
                <p className="text-xs text-gray-400 mt-1">{msg.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="flex items-center border-t pt-3 gap-2">
          <Input
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button onClick={handleSend} className="h-10 px-4">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
