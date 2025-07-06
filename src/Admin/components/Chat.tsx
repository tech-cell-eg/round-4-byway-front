import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const initialUsers = [
  {
    id: 1,
    name: "Veli Dincer",
    role: "Student",
    unreadCount: 0,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Theresa Webb",
    role: "Student",
    unreadCount: 3,
    image: null,
  },
  {
    id: 3,
    name: "Eleanor Pena",
    role: "Student",
    unreadCount: 0,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Jane Cooper",
    role: "Student",
    unreadCount: 0,
    image: null,
  },
  {
    id: 5,
    name: "Brooklyn Simmons",
    role: "Student",
    unreadCount: 0,
    image: null,
  },
  {
    id: 6,
    name: "Dianne Russell",
    role: "Student",
    unreadCount: 0,
    image: null,
  },
  {
    id: 7,
    name: "Floyd Miles",
    role: "Student",
    unreadCount: 0,
    image: null,
  },
];

const messagesData: Record<
  number,
  { sender: "me" | "user"; text: string; time: string }[]
> = {
  1: [
    {
      sender: "user",
      text: "Hi I have Some Querries regarding 2nd Chaper",
      time: "40 mins ago",
    },
    {
      sender: "me",
      text: "Sure, Let me know what is issue?",
      time: "40 mins ago",
    },
  ],
};

export default function Messages() {
  const [usersState, setUsersState] = useState(initialUsers);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(
    initialUsers[0]?.id ?? null
  );
  const [newMessage, setNewMessage] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedUser = usersState.find((u) => u.id === selectedUserId);
  const messages = selectedUserId ? messagesData[selectedUserId] || [] : [];

  const filteredUsers = usersState.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSend = () => {
    if (!newMessage.trim() || !selectedUserId) return;
    messagesData[selectedUserId] = [
      ...(messagesData[selectedUserId] || []),
      { sender: "me", text: newMessage, time: "Just now" },
    ];
    setNewMessage("");
  };

  const handleDelete = () => {
    const updatedUsers = usersState.filter((u) => u.id !== selectedUserId);
    setUsersState(updatedUsers);
    setSelectedUserId(updatedUsers.length ? updatedUsers[0].id : null);
    setShowChat(false);
    toast.success("User deleted!");
  };

  const handleBlock = () => {
    const updatedUsers = usersState.filter((u) => u.id !== selectedUserId);
    setUsersState(updatedUsers);
    setSelectedUserId(updatedUsers.length ? updatedUsers[0].id : null);
    setShowChat(false);
    toast.success("User blocked!");
  };

  return (
    <div className="flex flex-col md:flex-row bg-white shadow-sm border rounded-lg min-h-[90vh] w-full md:w-[85%]">
      {/* Sidebar */}
      <div
        className={`w-full md:w-[260px] border-r px-4 py-6 ${
          showChat ? "hidden md:block" : "block"
        }`}
      >
        <h2 className="text-xl font-semibold mb-5">Communication</h2>

        {/* Tabs */}
        <div className="flex space-x-4 text-sm font-medium border-b mb-4">
          <button className="py-2 bg-transparent text-gray-500">Reviews</button>
          <button className="py-2 bg-transparent text-blue-600 border-b-2 border-blue-600">
            Messages
          </button>
          <button className="py-2 bg-transparent text-gray-500">
            Notification
          </button>
        </div>

        {/* Search */}
        <div className="relative mb-5">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search User"
            className="pl-3 pr-10 py-2"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* User List */}
        <div className="overflow-y-auto space-y-2">
          {filteredUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => {
                setSelectedUserId(user.id);
                setShowChat(true);
              }}
              className={`p-3 rounded-lg cursor-pointer ${
                selectedUserId === user.id
                  ? "bg-blue-100"
                  : "hover:bg-gray-100"
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <Avatar className="w-10 h-10">
                    {user.image ? (
                      <AvatarImage src={user.image} alt={user.name} />
                    ) : null}
                    <AvatarFallback>
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.role}</div>
                  </div>
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
      <div
        className={`flex-1 flex flex-col justify-between p-6 ${
          showChat ? "block" : "hidden md:block"
        }`}
      >
        <button
          onClick={() => setShowChat(false)}
          className="md:hidden mb-4 text-blue-600 font-medium  bg-transparent"
        >
          ← Back to Chats
        </button>

        {selectedUser && (
          <>
            {/* Header */}
            <div className="flex justify-between items-center border-b pb-3">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  {selectedUser.image ? (
                    <AvatarImage
                      src={selectedUser.image}
                      alt={selectedUser.name}
                    />
                  ) : null}
                  <AvatarFallback>
                    {selectedUser.name
                      .split(" ")
                      .map((n) => n[0])
                      .slice(0, 2)
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{selectedUser.name}</h3>
                  <p className="text-sm text-gray-500">{selectedUser.role}</p>
                </div>
              </div>
              <div className="flex">
                <button
                  onClick={handleDelete}
                  className="bg-transparent cursor-pointer text-red-500 px-4"
                >
                  Delete
                </button>
                <button
                  onClick={handleBlock}
                  className="bg-transparent cursor-pointer text-blue-600 px-4"
                >
                  Block
                </button>
                <Toaster richColors />

              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto py-6 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.sender === "me" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[70%] px-4 py-2 rounded-lg text-sm ${
                      msg.sender === "me"
                        ? "bg-gray-100 text-right"
                        : "bg-transparent border"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className="text-xs text-gray-400 mt-1">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center justify-between border-t px-4 pt-2.5">
              <Input
                placeholder="There?"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                className="border-0 shadow-none"
              />
              <Button
                onClick={handleSend}
                className="py-2.5 px-6 rounded-lg bg-[#16A34A] font-medium cursor-pointer h-12"
              >
                Send
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
