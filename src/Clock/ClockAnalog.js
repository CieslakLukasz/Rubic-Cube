import React, { useState, useEffect } from "react";


const style = {

  width: "200px",
  height: "200px",
  borderRadius: "50%",
  border: "3px solid black",
  position: "relative",
  margin: '40px'
};

const mins = {
  width: "4px",
  height: "75px",
  background: "red",
  position: "absolute",
  top: "25px",
  left: "98px",
  zIndex: "3",
};
const hours = {
  width: "6px",
  height: "50px",
  background: "black",
  position: "absolute",
  top: "50px",
  left: "97px",
  zIndex: "4",
};
const secs = {
  width: "2px",
  height: "90px",
  background: "blue",
  position: "absolute",
  top: "10px",
  left: "99px",
  zIndex: "2",
};

export default function ClockAnalog({ date }) {
  const [secound, setSecound] = useState({
    ...secs,
    transform: `rotate(${date.getSeconds() * 6}deg)`,
    transformOrigin: `50% 100%`,
  });
  const [minute, setMinute] = useState({
    ...mins,
    transform: `rotate(${(date.getMinutes() * 6 + date.getSeconds() * 0.1)}deg)`,
    transformOrigin: `50% 100%`,
  });
  const [hour, setHour] = useState({
    ...hours,
    transform: `rotate(${date.getHours() * 30 + date.getMinutes() * 0.5}deg)`,
    transformOrigin: `50% 100%`,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setSecound((prev) => ({
        ...prev,
        transform: `rotate(${new Date().getSeconds() * 6}deg)`,
        transformOrigin: `50% 100%`,
      }));
      setMinute((prev) => ({
        ...prev,
        transform: `rotate(${
          new Date().getMinutes() * 6 + new Date().getSeconds()*0.1
        }deg)`,
        transformOrigin: `50% 100%`,
      }));
      setHour((prev) => ({
        ...prev,
        transform: `rotate(${
          new Date().getHours() * 30 + new Date().getMinutes() * 0.5
        }deg)`,
        transformOrigin: `50% 100%`,
      }));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div class='analog' style={style}>
      <div style={hour} />
      <div style={minute} />
      <div style={secound} />
    </div>
  );
}
