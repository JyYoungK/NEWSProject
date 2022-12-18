"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import WolfIcon from "../public/logos/Wolf.png";
import BuffaloIcon from "../public/logos/Buffalo.png";

function DarkModeButton() {
  const [mounted, setMounted] = useState(false); //using mount to prevent system from being confused on which theme to use because tailwind reacts with computer theme setting as well.
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <img
          className="h-14 w-16 cursor-pointer pr-2 hover:scale-125"
          src={BuffaloIcon.src}
          onClick={() => setTheme("light")}
        />
      ) : (
        <img
          className="h-14 w-14 cursor-pointer pr-2 hover:scale-125"
          src={WolfIcon.src}
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}

export default DarkModeButton;
