import React, { useEffect, useReducer } from 'react';

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case'RESET':
    return{count:0}
    default:
      return state;
  }
};

function ReduceHooks() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(countReducer, initialState);
//   const [c,sc]=setState(state.count)
//   useEffect(()=>{

//   },[])

  return (
    <div>
      <p>ReduceHook</p>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
    </div>
  );
}

export default ReduceHooks;