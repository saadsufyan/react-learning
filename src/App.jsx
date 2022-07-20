import React from 'react';
// import Components from "./components/Components";
// import Module,{text} from "./components/Module";
// import add,{sub,div,mul} from "./components/Calc";
import Cards from './components/Cards';

function App() {
  return (
    <>
    <Cards title='Architect & Engineer' name='John Doe' img='./assessts/img_avatar.png'/>
    <Cards title='Software Engineering' name='John DON' img='img_avatar.png'/>
    <Cards title='Employee' name='Johnyy Bravo' img='img_avatar.png'/>
    </>
      // <ul>
      //   <li>{add(5,2)}</li>
      //   <li>{sub(7,2)}</li>
      //   <li>{div(5,2)}</li>
      //   <li>{mul(3,2)}</li>
      // </ul>
    /* <Components/>
    <Module/>
    <p>{text}</p> */
  );
} 

export default App;