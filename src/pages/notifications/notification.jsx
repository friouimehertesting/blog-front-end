import React, { useEffect } from "react";

import "./style.scss";

function Notification({
  msg,
  top,
  left,
  right,
  bottom,
  showNofification,
  type,
}) {
  useEffect(() => {
    const notif = setTimeout(() => {
      showNofification(false);
    }, 3000);
    return () => {
      clearInterval(notif);
    };
  }, [showNofification]);

  return (
    <div
      className="notification"
      style={{
        position: "absolute",
        top: top ? top : "",
        left: left ? left : "",
        right: right ? right : "",
        bottom: bottom ? bottom : "",
        border: "1px solid" + type === "error" ? "red" : "lighgray",
        backgroundColor: type === "error" ? "red" : "lighgray",
        color: type === "error" ? "white" : "black",
      }}
    >
      <span>{msg}</span>
    </div>
  );
}

export default Notification;
