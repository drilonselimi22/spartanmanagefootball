import React from "react";

export default function Items({ currentItems }) {
    // {
    //     "name": "Leonit",
    //     "lastName": "Krasniqi",
    //     "experience": "5",
    //     "city": "Prishtine",
    //     "position": "Kryesor"
    //   }
    function consoleProps(e){
        e.preventDefault();
        console.log("items currentItems",currentItems)
    }
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "40%",
          width: "500px",
          border: "2px solid blue",
        }}
      >
        <h1>Component</h1>
        {currentItems && 
        currentItems.map((item)=>{
            return(
                <h1>nameeee: lyrical - {item.name}</h1>
            )
        })}
        <button onClick={consoleProps}>clickmeeeeeeeeeeee!</button>
      </div>
    </>
  );
}
