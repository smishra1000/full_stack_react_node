
import {Greet} from "./Greet";
import User from './components/User'
import Counter from './components/Counter'
import CounterFunction from "./components/CounterFunction";
function App() {
  return (
    <div>
      {/* <Greet/>
    <Greet/> */}
    {/* <User/> */}
    <Counter company="abc" mob="123454"/>
    <CounterFunction company="abc" mob="123445"/>
    </div>
    
  );
}

export default App;



