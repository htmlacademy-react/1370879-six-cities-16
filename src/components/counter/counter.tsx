import { decreamented, incremented } from '../../features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './style.module.css';

function Counter() {
  const counter = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  // const createTuple = (...params: readonly [string, number, string[]]) => Object.freeze(params);
  // console.log(createTuple('1', 2, ['1', '2', '3']));
  // const tuple = createTuple('3', 4, ['3', '4', '5']);

  // console.log(tuple);

  // console.log(counter);
  // console.log(dispatch);

  return (
    <div className={styles.counter}>
      <h1>{counter.value}</h1>

      <button
        onClick={() => dispatch(incremented())}
        className="custom-button"
      >
        INC
      </button>


      <button
        onClick={() => dispatch(decreamented())}
        className="custom-button"
      >
        DEC
      </button>

      {/* {tuple} */}
    </div>
  );
}

export default Counter;
