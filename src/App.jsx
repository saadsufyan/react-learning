import React from 'react';
// import Components from "./components/Components";
// import Module,{text} from "./components/Module";
// import add,{sub,div,mul} from "./components/Calc";
import Cards from './components/Cards';
import Getdata from './data/Data';

function App() {
  return (
    <>
    {Getdata.map((val,index)=>{
       return(val.id==45?<Cards key={val.id} title={val.title} name={val.name} img={val.img}/>:val.id==2?<Cards key={val.id} title={val.title} name={val.name} img={val.img}/>:undefined) })};
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