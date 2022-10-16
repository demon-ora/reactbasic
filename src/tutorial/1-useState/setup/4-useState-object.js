import React, { useState } from 'react';

const UseStateObject = () => {
 
  const [obj,setobj] = useState({
    name: 'peter',
    age: 24,
    message: 'random message',
  });
    
const changeMessage = () =>{  
  setobj({...obj,me:"helloworld"});
}

  return <>
    <h3>{obj.name}</h3>
      <h3>{obj.age}</h3>
      <h4>{obj.message}</h4>
        <h4>{obj.me}</h4>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
  </>
};

export default UseStateObject;
