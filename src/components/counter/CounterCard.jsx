import { useSelector, useDispatch } from "react-redux"
import { useState } from "react";
import { increment, decrement } from "../../redux/state/counter/counterSlice";



const CounterCard = () => {

  let [count, setCount] = useState(0);

  let data = useSelector((state) => state)
  let dispatch = useDispatch();
  console.log(data.counter.value);


  let handleIncrement = () => {
    count++;
    setCount(count);
    dispatch(increment(count))
  }

  let handleDecrement = () => {
    count--;
    setCount(count);
    dispatch(decrement(count))
  }

  return (
    <>
      <div className="card text-center">

        <div className="card-header bg-secondary">
          <h4 className="text-white text-center">Simple Counter App</h4>
        </div>
        <div className="card-body">
          <h1>{count}</h1>
          <div className="my-4">
            <button onClick={handleIncrement} className="btn btn-success">Increase</button>
            <button onClick={handleDecrement} className="btn btn-danger ms-2">Decrease</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default CounterCard
