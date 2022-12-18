"use client";

import { useRouter } from "next/navigation"; //nextjs13 version /router is nextjs12 version
import { FormEvent, useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox() {
  const [input, setInput] = useState("");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input) return; // do nothing if input is empty

    router.push(`/search?term=${input}`);
  };

  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (index < "Search Keywords...".length) {
        setCurrentText((value) => value + "Search Keywords...".charAt(index));
        setIndex((i) => i + 1);
      } else {
        setIndex(0);
        setCurrentText("");
      }
    }, 500);
    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  return (
    <form
      onSubmit={handleSearch}
      className="mx-auto flex max-w-xs items-center justify-between px-5 font-mono text-xl"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={`${currentText}`}
        className="h-14 w-full flex-1 rounded-sm bg-transparent text-black placeholder-black outline-none dark:text-orange-400 dark:placeholder-orange-400"
      />

      <button
        type="submit"
        disabled={!input}
        className="text-black disabled:text-gray-400 dark:text-orange-400 dark:disabled:text-gray-400"
      >
        <SearchIcon />
      </button>
    </form>
  );
}

export default SearchBox;
