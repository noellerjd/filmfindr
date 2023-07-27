"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery !== "") {
      router.push(`/searchResults?movie=${encodeURIComponent(trimmedQuery)}`);
    }
    event.preventDefault();
    setSearchQuery("");
  };

  return (
    <div className="mx-3">
      <form>
        <label
          htmlFor="default-search"
          class="mb-2 text-sm font-medium text-darkgray sr-only"
        >
          Search
        </label>
        <div class="relative">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            class="block w-full p-4 pl-10 text-sm text-black border border-darkgray rounded-lg bg-lightgray"
            placeholder="Search Mockups, Logos..."
            autoComplete="off"
            required
          />
          <button
            type="submit"
            class="text-white absolute right-2.5 bottom-2.5 bg-darkblue hover:bg-lightblue hover:text-black focus:ring-1 focus:outline-none focus:ring-lightblue font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
