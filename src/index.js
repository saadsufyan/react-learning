import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App.jsx'
import Cards from './components/Cards';
const root = ReactDOM.createRoot(document.getElementById('root'));
//working on components


 // //mini task on for time change
 // let time_change=new Date(2022,8,12,10,20,0);
 // let x=time_change.getHours()>=15?"evening":time_change.getHours()>=12?"afternoon":time_change.getHours()>=20?"night":"morning";
 // const inlineStyle={
 //   fontSize: '4em',
 //   margin: '0.67em 0',
 //   fontStyle: 'italic',
 //   color: 'blueviolet',
 // }
 // const inlineStyle2={
 //   fontSize: '3em',
 //   margin: '0.67em 0',
 //   fontStyle: 'italic',
 //   color: 'green',
 // }
 root.render(
   
<>
    <Cards title='Architect & Engineer' name='John Doe' img='./assessts/img_avatar.png'/>
    <Cards title='Software Engineering' name='John DON' img='img_avatar.png'/>
    <Cards title='Employee' name='Johnyy Bravo' img='img_avatar.png'/>
    </>
 );


 
 // // //mini task on for time change
 // let time_change=new Date(2022,8,12,10,20,0);
 // let x=time_change.getHours()>=15?"evening":time_change.getHours()>=12?"afternoon":time_change.getHours()>=20?"night":"morning";
 // const inlineStyle={
 //   fontSize: '4em',
 //   margin: '0.67em 0',
 //   fontStyle: 'italic',
 //   color: 'blueviolet',
 // }
 // const inlineStyle2={
 //   fontSize: '3em',
 //   margin: '0.67em 0',
 //   fontStyle: 'italic',
 //   color: 'green',
 // }
 // root.render(
 //   <>
 // <p style={inlineStyle2}>HELLO MAFIA THE TIME IS, <strong style={inlineStyle}>{x}</strong>  </p>
 //   </>
 // );

// working on css inline styling and className
// const name="John";
// const lname="bravo";
// let date=new Date().getTime();
// const inlineStyle={
//   fontSize: '7em',
//   margin: '0.67em 0',
//   fontStyle: 'italic',
//   color: 'blueviolet',
// }
// root.render(
//   <>
// <h1 style={inlineStyle}>Hello, world!</h1>
// <p>boys {3*3}</p>
// <p>boys {Math.random()}</p>
// <h2>Makes some {` ${name} ${lname}`}</h2>
// <h3>Current Date is {` ${date}`}</h3>
// <h4>Current Time is {`${date}`}</h4>
// <h4 contentEditable="true">Current Time is {`${date}`}</h4>
// <h4 className='h1'>Current Time is {`${date}`}</h4>
//  <img src='https://unsplash.com/photos/7KLa-xLbSXA' alt=''/>
//   </>
// );
// // quiz 2 video 12
// const name="John";
// const lname="bravo";
// let date=new Date().getTime();
// ReactDOM.render(
// <>
// <h1>Hello, world!</h1>
// <p>boys {3*3}</p>
// <p>boys {Math.random()}</p>
// <h2>Makes some {` ${name} ${lname}`}</h2>
// <h3>Current Date is {` ${date}`}</h3>
// <h4>Current Time is {`${date}`}</h4>
// <h4 contentEditable="true">Current Time is {`${date}`}</h4>
// <h4 className='h1'>Current Time is {`${date}`}</h4>
// <img src='https://unsplash.com/photos/7KLa-xLbSXA' alt=''/>
// </>
// , document.getElementById("root"));

// // template litrals is just like a string ${name} ${lname}
// const name="John";
// const lname="bravo";
// ReactDOM.render(
// <>
// <h1>Hello, world!</h1>
// <p>boys {3*3}</p>
// <p>boys {Math.random()}</p>
// <h2>Makes some {` ${name} ${lname}`}</h2>
// </>
// , document.getElementById('root'));


// // this is expression syntax {variable} or {arthmatical expression}
// const name="John";
// ReactDOM.render(
// <>
// <h1>Hello, world!</h1>
// <p>boys {3*3}</p>
// <p>boys {Math.random()}</p>
// <h2>Makes some {name}</h2>
// </>
// , document.getElementById('root'));





// ReactDOM.render(
// <>
// <h1>Hello, world!</h1>
// <p>boys</p>
// <h2>Makes some noise</h2>
// <ol>
//   <li>Coffee</li>
//   <li>Tea</li>
//   <li>Milk</li>
// </ol>
// </>
// , document.getElementById('root'));


// // React.Fragment is sugar form < >  </>
// ReactDOM.render(
// <React.Fragment>
// <h1>Hello, world!</h1>
// <p>boys</p>
// <h2>Makes some noise</h2>
// </React.Fragment>
// , document.getElementById('root'));
// ReactDOM.render(
// <React.Fragment>
// <h1>Hello, world!</h1>
// <p>boys</p>
// <h2>Makes some noise</h2>
// </React.Fragment>
// , document.getElementById('root'));



// ReactDOM.render(
// [
// <h1>Hello, world!</h1>, 
// <p>This is a paragraph.</p>
// ]
// , document.getElementById('root'));
// ReactDOM.render(
// <div>
// <h1>Hello, world!</h1>
// <p>This is a paragraph.</p>
// </div>
// , document.getElementById('root'));


 


//WRITE IN BEBEL CONVERTION 
// ReactDOM.render("h1",document.getElementById('root'),"Muzzammil Shaikh", );


// let h1 =document.getElementById("h1");
// h1.innerHTML="Muzzammil Shaikh";
// h1.style.color="red";
// document.getElementById("root").appendChild(h1);

