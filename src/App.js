import React,{useState} from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
//Declare a state variable named 'count' and a function to update it 'setCount'
const [count,setCount] = useState(0);
// Function to increment the count
const increment = () => {
  setCount(count + 1);
};
//Function to decrement the count
const decrement = () =>{
  setCount(count - 1);
};
return (
  <div className='App'>
    <header className='App-header'>
      <h1>React state Example: Counter</h1>
      <div className='counter'>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>
      </div>
    </header>
  </div>
);
}
export default App;
