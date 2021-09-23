import React, { useState, useEffect } from 'react';

function Example() {
  // Declarar uma nova variável de state, na qual chamaremos de "count"
  const [count, setCount] = useState(0);


  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    console.log('mudou')
  });

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    console.log('mudou []')
  },[]);

  useEffect(() => {
    // Atualiza o titulo do documento usando a API do browser
    console.log('mudou [count]')
  },[count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Example;