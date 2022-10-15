import './index.css'
import React from 'react';
import {data} from './books'


 const complexExample = (author) => {
  console.log(author);
 };

function App({img,title,author}) {
  return (
    <>
    <article>
<img src={img} alt="hello" />
  <p>{title}</p>
  <button onClick={()=>complexExample(author)}>click</button>
    </article>
 
    </>
  );
}

function Book() {
  return (
    <>
  <section className='booklist'>
      {data.map((book, index) => {
        return <App key={book.id} {...book}></App>;
      })}
    </section>
    </>
  );
}


export default Book;
