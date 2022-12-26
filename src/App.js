import Counter from "./Counter";
import { CounterRedux } from "./CounterRedux";
import CounterZustand from "./CounterZustand";

function App() {
  return (
    <div>
      <CounterZustand></CounterZustand>
      {/* <CounterRedux></CounterRedux> */}
    </div>
  );
}

export default App;
