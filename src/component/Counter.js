import React, { useReducer } from "react";
import './style1.css'


const reducer = (state, action)=>{
    if(action.type==="INC"){
        state=state+1;
    }

    if(state>0 && action.type==="DEC"){
        state= state-1;
    }
    return state;
}

const Counter = ()=>{
  const initialState= 10;
    const [state, dispatch] = useReducer(reducer, initialState)

return(
    <>
    <div>{state}</div>
    <div className="main">
        
        <button className="but1" onClick={()=>dispatch({type:"INC"})}>Increment</button>
        <button className="but2" onClick={()=>dispatch({type:"DEC"})}>Decrement</button>
    </div>
    </>
)
}

export default Counter;