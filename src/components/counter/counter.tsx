import { useState } from 'react';
import styles from './style.module.css';

function Counter() {
  const [counter, setCount] = useState<{ count: number }>({
    count: 0
  });

  const createTuple = (...params: readonly [string, number, string[]]) => Object.freeze(params);
  // console.log(createTuple('1', 2, ['1', '2', '3']));
  const tuple = createTuple('3', 4, ['3', '4', '5']);

  return (
    <div className={styles.counter}>
      <h1>{counter.count}</h1>

      <button
        onClick={() => setCount({
          ...counter,
          count: counter.count + 1
        })}
        className="custom-button"
      >
        INC
      </button>


      <button
        onClick={() => setCount({
          ...counter,
          count: counter.count - 1
        })}
        className="custom-button"
      >
        DEC
      </button>

      {tuple}
    </div>
  );
}

export default Counter;
