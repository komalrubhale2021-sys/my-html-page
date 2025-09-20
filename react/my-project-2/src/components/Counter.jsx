import {useState} from "react";
export const Counter =()=>{
    // let count=0;
    const[count,setCount]=useState();
    function increment(){
        console.log(count);
        count=count+1;
    }
    function decrement(){
        console.log(count);
        count=count-1;
    }
    return(
        <div>
        {count}
        <br/>
        <button onClick={increment}>Increment</button>
        <br/>
        <button onClick={decrement}>Decrement</button>
        </div>
    );
}
