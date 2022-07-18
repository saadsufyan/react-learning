import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const name="John";
const lname="bravo";
let date=new Date().getTime();

const root = ReactDOM.createRoot(document.getElementById('root'));


const inlineStyle={
  fontSize: '7em',
  margin: '0.67em 0',
  fontStyle: 'italic',
  color: 'blueviolet',
}
root.render(
  <>
    <h1 style={inlineStyle}>Hello, world!</h1>
<p>boys {3*3}</p>
<p>boys {Math.random()}</p>
<h2>Makes some {` ${name} ${lname}`}</h2>
<h3>Current Date is {` ${date}`}</h3>
<h4>Current Time is {`${date}`}</h4>
<h4 contentEditable="true">Current Time is {`${date}`}</h4>
<h4 className='h1'>Current Time is {`${date}`}</h4>
 <img src='https://unsplash.com/photos/7KLa-xLbSXA' alt=''/>
  </>
);
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

