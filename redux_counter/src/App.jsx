import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./main";
import "./app.css";

export default function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>Redux Counter</h1>

      <div className="card">
        <p className="count">{count}</p>
        <div className="buttons">
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </div>
    </div>
  );
}
