"use client";

import React, { useState, useEffect } from "react";

const Typewriter = ({ text }: { text: string }) => {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((value) => value + text.charAt(index));
      setIndex((i) => i + 1);
    }, 600);
    return () => {
      clearInterval(intervalId);
    };
  }, [index, text]);
  return <div className="blink">{currentText}</div>;
};

export default Typewriter;
