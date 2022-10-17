import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');

useEffect(()=>{
fetch(url).then((res)=>
{
  if(res.status >= 200 && res.status <=299 ){
    return res.json();
  }else{
    setIsLoading(false);
    setIsError(true);
  }
}).then((user)=>{
const {login} =user;
setUser(login);
setIsLoading(false);
}).catch((error)=>console.log(error));
},[])

  if(isLoading){
  return <>
  <h1>loading</h1>
  </>;
  }

  if(isError){
  return <>
  <h1>error</h1>
  </>;
  }

  return <>
  {user}
  </>
};

export default MultipleReturns;
