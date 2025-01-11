import logo from "./logo.svg";
import "./App.css";
import { Counter, ExpCal, List, Timer } from "./Components/Timer";
import CurrencyExhange, { CheckValue } from "./Components/CurrancyExchange";
import Stopwatch from "./Components/Stopwatch";

function App() {
  return (
    <div className="App">
      {/* <Timer></Timer>
      <Counter />
      <List />
      <ExpCal />
      <CurrencyExhange />
      <CheckValue /> */}
      <Stopwatch />
    </div>
  );
}

export default App;
