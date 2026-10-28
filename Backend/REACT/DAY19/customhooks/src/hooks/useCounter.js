import { useState } from "react"

const useCounter = () => {

    const [count,setCount] = (initialcount = 0,step = 1);

    const increment = ()=>{

        setCount(count + 1);

    };

    const Decrement = () => {
      setCount(count - 1);
    };

    const Reset = () => {
      setCount(initialcount);
    };

    return { count, increment, Decrement, Reset };
}

export default useCounter
