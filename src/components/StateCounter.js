import React, {useState} from 'react';

const StateCounter = () => {
  const [count, setCount] = useState(10);

  // onClick invokes a function which calls the setState function 
  // the first uses an updater function, typically not used
  // only used to stop race conditions and weird updates
  // the second is the typical, what you expect 
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(currentCount => currentCount+1)}>
        Click to Increment
      </button>
      <br></br>
      <button onClick={() => setCount(0)}> 
        Set to Zero
      </button>
    </div>
  );
};

export default StateCounter;