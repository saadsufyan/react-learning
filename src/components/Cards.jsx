import React from 'react';
import '../index.css';

function Cards(props) {
  console.log(props)
  return (
   <>
   <div className="card">
   <img src={props.img} alt="Avatar"/>
   <div className="container">
     <h4><b>{props.name}</b></h4> 
     <p>{props.title}</p> 
   </div>
 </div>
   </>
  );
}


export default Cards;