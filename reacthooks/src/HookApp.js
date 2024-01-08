import React, {  useState,useEffect} from "react"; 


const HookApp = () =>{
        const [count,setCount]  = useState(0);
        useEffect(()=>{ ///whenever the state changes this useeffect runs 
            document.title = `clicked ${ count} times`;
        });
       const increment = () =>{
            setCount(count+1);
        }
        const decrement = () =>{
            setCount(count-1);
        }

        return (
        <div>
        <h2>Counter hookap {count}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      </div>

        );
}


export default HookApp;