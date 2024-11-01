import React, {useState, useEffect} from "react"

function App() {

  const [val, setData]=useState([])

  useEffect(()=>{
    const url="https://jsonplaceholder.typicode.com/posts"
    fetch(url)
    .then(res=>res.json())
    .then(data=>setData(data))
    
  },[])

  return (
    <div className="cont">
      <h2>Fetched data</h2>

      {val.slice(0,10).map(item=>{
        return (<div key={item.id}>
          <h4>{item.id}. {item.title}</h4>
          <p>{item.body}</p>
        </div>)
      })}
    </div>
  )
}

export default App;