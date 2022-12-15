"use client";

import { useRouter } from "next/navigation"; //nextjs13 version /router is nextjs12 version
import { FormEvent, useState } from "react";

function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return; // do nothing if input is empty

    router.push(`/search?term=${input}}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="mx-auto flex max-w-6xl items-center justify-between px-5"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search Keywords..."
        className="h-14 w-full flex-1 rounded-sm bg-transparent text-gray-500 placeholder-gray-500 outline-none dark:text-orange-400"
      />

      <button
        type="submit"
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBox;
