import React,{useState} from 'react';
import { data } from '../../../data'; 
import '../../../index.css'

const UseStateArray = () => {

  const[people,setpeople] = useState(data);
    
const clearone = (id) => {
 const newpers = people.filter((newper)=>
newper.id !== id
 )
 setpeople(newpers)
}

  return<> 
     {
      people.map((person)=>{
       const {id,name}=person;
       return(
        <div className='item'>{name}
          <button onClick={()=>clearone(id)}>clearone</button>
        </div>
      
       );
      })
     }
     <button onClick={()=> setpeople([])}>clearall</button>
  </>
};

export default UseStateArray;
