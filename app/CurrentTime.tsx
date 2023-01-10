"use client";

import { useState, useEffect } from "react";

var today = new Date();
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
var mL = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
var yyyy = today.getFullYear();

export function CurrentVolume() {
  const [vol, setVol] = useState(0);
  const [totalDays, setTotalDays] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      var today = new Date();
      var beginning = new Date(`1/1/${yyyy}`);
      var difference = today.getTime() - beginning.getTime();
      setVol(yyyy % 1000);
      setTotalDays(Math.ceil(difference / (1000 * 60 * 60 * 24)));
    }, 1000); // run every 24 hours

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: "Vol." + vol + " • No." + totalDays }}
    />
  );
}

export function NameOfDay() {
  const [nameOfDay, setNameOfDay] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      var today = new Date();
      var day = today.getDay();
      setNameOfDay(days[day]);
    }, 1000); // run every 24 hours

    return () => clearInterval(intervalId);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: nameOfDay + "," }} />;
}

export function DateInformation() {
  const [nameOfMonth, setNameOfMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      var today = new Date();
      var mm = String(today.getMonth()).padStart(2, "0"); //January is 0!

      setDay(String(today.getDate()).padStart(2, "0"));
      setNameOfMonth(mL[parseInt(mm)]);
      setYear(String(today.getFullYear()));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: nameOfMonth + "-" + day + "-" + year }}
    />
  );
}

export function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(today.toLocaleString());
  useEffect(() => {
    var secTimer = setInterval(() => {
      setCurrentTime(new Date().toLocaleString().split(",")[1].trim());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: "/ " + currentTime }} />;
}
