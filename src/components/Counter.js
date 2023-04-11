import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'
const Counter = () => {

  const dispatch = useDispatch();

  const counter = useSelector(state=>state.counter);
  const show =useSelector(state=>state.showCounter);

  const incrementHandler=()=>{
    dispatch({type:'INCR',amount:10});
  }

  const decrementHandler=()=>{
    dispatch({type:'DECR'});
  }

  const toggleCounterHandler = () => {
    dispatch({type:'TOGGLE'});
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
       <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={incrementHandler}>Increment by 10</button>
        <button onClick={decrementHandler} >Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
