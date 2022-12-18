"use client";

import { useState, useEffect } from "react";

function CurrentTime({ initialTime }: any) {
  const [currentTime, setCurrentTime] = useState(initialTime);

  useEffect(() => {
    let secTimer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString().split(",")[1].trim());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return <div>{"/" + currentTime}</div>;
}

export default CurrentTime;
