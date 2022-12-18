"use client";

import React, { useState, useEffect } from "react";

const FastTypewriter = ({ text }: { text: string }) => {
  const [index, setIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentText((value) => value + text.charAt(index));
      setIndex((i) => i + 1);
    }, 100);
    return () => {
      clearInterval(intervalId);
    };
  }, [index, text]);
  // const [index, setIndex] = useState(0);
  // const [currentText, setCurrentText] = useState("");
  // const words = text.split(" "); // split the text into an array of words

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     if (index < words.length) {
  //       setCurrentText((value) => value + words[index] + " "); // add the current word and a space to the current text
  //       setIndex((i) => i + 1);
  //     }
  //   }, 100);
  //   return () => {
  //     clearInterval(intervalId);
  //   };
  // }, [index, text]);

  return <p className="text:sm md:text-base">{currentText}</p>;
};

export default FastTypewriter;
