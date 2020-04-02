import React, { useState, useEffect } from "react";

function App() {
  let LocalTime = new Date().toLocaleTimeString("en-GB");
  let [time, curTime] = useState(new Date().toLocaleTimeString("en-GB"));


      setInterval(() => {
      curTime(new Date().toLocaleTimeString("en-GB"));
    }, 1000);
  

  return (
    <div className="container">
      <h1>{time}</h1>
        
    </div>
  );
}

export default App;