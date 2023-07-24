"use client";

import { useState } from "react";
import { useRouter } from "next/router";

const Search = () => {
  //   const [searchQuery, setSearchQuery] = useState("");
  //   const router = useRouter();

  //   const handleSearch = () => {
  //     const trimmedQuery = searchQuery.trim();
  //     if (trimmedQuery !== "") {
  //       router.push(
  //         `/searchResults?location=${encodeURIComponent(trimmedQuery)}`
  //       );
  //     }
  //     event.preventDefault();
  //     setSearchQuery("");
  //   };

  return (
    <div>
      <form className="drop-shadow-lg">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative mx-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            autoComplete="off"
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-black border border-gray rounded-lg bg-white focus:ring-darkblue outline-none focus:border-darkblue text-center"
            placeholder="Search movie... ex. Spiderman (1999)"
            required
          />
          <button
            type="submit"
            className="text-black absolute right-2.5 bottom-2.5 bg-lightblue hover:bg-darkblue hover:text-lightgray focus:ring-4 focus:outline-none focus:ring-orange font-medium rounded-xl text-sm px-2 py-2"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
