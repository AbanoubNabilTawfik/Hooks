import React ,{useState,useEffect} from 'react'

function HookCounterFive() {

    const [count,setCount]=useState(0);
    const [name,setName]=useState('');

    useEffect(()=>{
        // if(count==10)
        // {
        //     setName()
        // }
        console.log("UseEffect -Updating document title")
        document.title=`You Clicked ${count} Times`;
    },[count])

  return (
    <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
       <button onClick={()=>setCount(count+1)}>Clicked {count} times</button>
    </div>
  )
}

export default HookCounterFive
