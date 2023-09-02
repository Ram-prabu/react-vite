import React, { useEffect, useState } from 'react'

function EffectHooks() {
    const [count,setCount] =useState(0);
    useEffect(()=>{
        console.log("Mount is completed")
    },[])
    useEffect(()=>{
        console.log("update is complete"),[count]
    }
    )
  return (
    <>
    <div>EffectHooks:{count}</div>
    <button onClick={()=>setCount(count+1)}>Add</button>
    </>
  )
}

export default EffectHooks