import React from 'react';
// import Components from "./components/Components";
// import Module,{text} from "./components/Module";
import add,{sub,div,mul} from "./components/Calc";

function App() {
  return (
    <div>
      <ol>
        <li>{add(5,2)}</li>
        <li>{sub(7,2)}</li>
        <li>{div(5,2)}</li>
        <li>{mul(3,2)}</li>
      </ol>
    {/* <Components/>
    <Module/>
    <p>{text}</p> */}
    </div>
  );
} 

export default App;