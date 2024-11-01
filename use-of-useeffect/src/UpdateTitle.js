import React, {useEffect, useState} from "react"

function UpdateTitle(){
  const [count, setCount]=useState(0)
  
useEffect(()=>{
  document.title=`Count: ${count}`
},[count])

  return(
    <div>
      <h2>Counter</h2>
      <p><button onClick={()=>setCount(count+1)}>+</button> Count: {count}</p>
    </div>
  )
}

export default UpdateTitle