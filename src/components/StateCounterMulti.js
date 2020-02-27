import React, {useState} from 'react';

const StateCounterMulti = () => {

  // for multiple pieces of state, use spread operators in the setting of state
  // or at least, list all the state in the new object
  // note that state is an object, so sets will have to use objects for access
  const [{count1, count2}, setCount] = useState({count1: 10, count2: 20})
  return (
    <div>
      <div>Count 1: {count1}</div>
      <div>Count 2: {count2}</div>
      <button
        onClick={()=> {
          setCount(currentState => ({
            ...currentState ,
            count1: currentState.count1 +1,
          }))
        }}
      >
        Increase Count 1
      </button>
      <button
        onClick={()=> {
          setCount(currentState => ({
            ...currentState, 
            count2: currentState.count2 +1,
          }))
        }}
      >
        Increase Count 2
      </button>

    </div>
  );
};

export default StateCounterMulti;