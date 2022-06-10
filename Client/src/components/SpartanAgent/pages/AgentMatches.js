import React, { useState, useEffect } from "react";
import SidebarAgent from "../SidebarAgent";

function AgentMatches() {
  const [logged, setlogged] = useState(false);

  useEffect(() => {
    var items = null;
    items = localStorage.getItem("email");
    if (items != null) {
      setlogged(true);
    }
    console.log("LOGGED???", logged);
  });
  return (
    <div>
      {logged ? (
        <>
          <SidebarAgent />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
            }}
          >
            <h1>Agent Matches</h1>
          </div>
        </>
      ) : (
        <div>
          <h4>Agent Matches</h4>
          <h1>Sorry you are Unauthorized for this page </h1>
        </div>
      )}
    </div>
  );
}

export default AgentMatches;
