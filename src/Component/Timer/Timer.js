import React, {useState, useEffect} from "react"

const Timer = () => {

    const viewer = 2
    const [count, setCount]= useState(0)
    const [counter, setCounter]= useState(0)
    const [text, setText]= useState (["good", "me"])


    useEffect(()=>{
        setInterval(()=>{
           setCounter(el=>el+1)
        },1000)
    },[])
    return (
        <div style={{
            width:"100%",
            height:"100vh",
            backgroundColor:"grey",
            fontSize:"60px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
        
        }}>
             <div>My Timer</div>
             <div>{viewer}</div>
             <div>{count}</div>
             <div>{counter}</div>
             <button onClick={()=>{
                 setCount(count+1)
             }}>Press Me</button>
            
          </div> 

    )
}

export default Timer
