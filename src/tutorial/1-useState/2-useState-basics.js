import React, { useState } from 'react';

const UseStateBasics = () => {
 
  const [text,settext] = useState("hello world");

const change = () =>{ 
  if(text === "hello world")  
  settext("change it"); 
  else settext("hello world");
}

  return <>
       <p>{text}</p>
       <button onClick={change}>change</button>
  </>
};

export default UseStateBasics;
