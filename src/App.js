import './App.css';
import React,{useState} from 'react';
function Counter (){
const [value,setValue]=useState(0);

  const add = ()=>{setValue(value+1)};
  const subtract = ()=> {setValue(value-1)};
  return(
 <div className = 'division'>
 <button onClick = {subtract} disabled = {value===0} className = 'subbutton' >-</button>
 <h1 className = 'heading'>{value}</h1>
 <button onClick={add} className = 'addbutton'>+</button>
</div>
  );
}

export default Counter;
