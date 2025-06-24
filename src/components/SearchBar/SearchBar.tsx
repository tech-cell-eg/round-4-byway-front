import { useState } from "react";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Add search logic here (API call, filtering, etc.)
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`relative flex items-center transition-all duration-200  ${
        isFocused ? "ring-2 ring-gray-500" : "ring-1 ring-gray-300"
      } rounded-lg overflow-hidden bg-white shadow-sm`}
    >
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder="Search courses"
        className=" py-3 px-5 w-full focus:outline-none text-gray-700 placeholder-gray-400"
      />
      <button
        type="submit"
        className={`absolute right-0 h-full px-4 flex items-center justify-center ${
          isFocused ? "bg-gray-600" : "bg-gray-100"
        } transition-colors duration-200`}
        aria-label="Search"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
