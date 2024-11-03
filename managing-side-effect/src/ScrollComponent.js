import React, {useState, useEffect} from 'react';

function ScrollComponent(){
    const [scrollPosition, setScrollPosition]=useState(0)

    useEffect(()=>{
        const handleScroll=()=>{
            setScrollPosition(window.scrollY)
        }
        window.addEventListener("scroll", handleScroll)
        return ()=>window.removeEventListener("scroll", handleScroll)
    },[])
    
    return(
        <div className="container">
            <h2>Scroll Position: <span style={{color:"red"}}>{scrollPosition}</span> px</h2>
            <p>(Scroll down to see Scroll Position update)</p>
        </div>
    )
}
export default ScrollComponent