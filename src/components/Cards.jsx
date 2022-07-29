import React from 'react';
import '../index.css';
import Images from './Images';

function Cards(props) {
  console.log(props)
  return (
   <>
   <div className="card">
   <Images img={props.img}/>
   <div className="container">
     <h4><b>{props.name}</b></h4> 
     <p>{props.title}</p> 
   </div>
 </div>
   </>
  );
}


export default Cards;