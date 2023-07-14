
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [add, setAdd] = useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {add} times</p>
        <button onClick={()=>setAdd(add+1)}>Click me</button>
    </div>
  )
}

export default App
