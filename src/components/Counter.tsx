import React, { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(2);
  const add = () => setCount((i) => i + 1);
  const subtract = () => setCount((i) => i - 1);

  return (
    <>
      <div className="counter">
        <span>
          Test lorem ipsum sit dolor lorem ipsum sit dolor{' '}
          <strong>testing</strong>
        </span>
        <button onClick={subtract}>-</button>
        <pre>{count}</pre>
        <button onClick={add}>+</button>
      </div>
    </>
  );
} 