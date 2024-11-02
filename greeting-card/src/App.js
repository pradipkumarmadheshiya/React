import React from "react"
import GreetingCard from "./GreetingCard";

function App() {

  const arr=[{greet:"Good to see you", name:"John Doe."}, {greet:"how's it going?", name:"Jane Malik."}, {greet:"Hope you're having a great day", name:"Pradip"}, {greet:"Happy Birthday!", name:"John Dev."}]



  return (
    <div className="container">
      <GreetingCard greet={"Happy Birthday!"} name={"John Doe."}/>
      <GreetingCard greet={"Happy Birthday!"} name={"Jane Malik."}/>
      <GreetingCard greet={"Happy Birthday!"} name={"John Dev."}/>
      {arr.map((item, index)=>(
        <div key={index}>
          <p>{item.greet} {item.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
