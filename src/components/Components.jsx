import React from 'react';

let time_change=new Date(2022,8,12,10,20,0);
 let x=time_change.getHours()>=15?"evening":time_change.getHours()>=12?"afternoon":time_change.getHours()>=20?"night":"morning";
 const inlineStyle={
   fontSize: '4em',
   margin: '0.67em 0',
   fontStyle: 'italic',
   color: 'blueviolet',
 }
 const inlineStyle2={
   fontSize: '3em',
   margin: '0.67em 0',
   fontStyle: 'italic',
   color: 'green',
 }


function Components() {
 return (  
 <p style={inlineStyle2}>HELLO MAFIA THE TIME IS, <strong style={inlineStyle}>{x}</strong>  </p>
 )
}


export default Components;