import { useState } from 'react';
import styles from './style.module.css';

function Counter() {
  // const count: number = 0;
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counter}>
      <h1>{count}</h1>

      <button
        onClick={() => setCount(count + 1)}
        className="custom-button"
      >
        INC
      </button>


      <button
        onClick={() => setCount(count - 1)}
        className="custom-button"
      >
        DEC
      </button>
    </div>
  );
}

export default Counter;
