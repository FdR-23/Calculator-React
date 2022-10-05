import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState();


  const handleClick = (e) => {
    e.preventDefault()
    setInput( input + e.currentTarget.value)
console.log(input)
  }
  
  function handleChance(e) {
    e.preventDefault()
    console.log(e.target.value)
   
    console.log(input)
}

  return (
    <div className='m-auto  w-screen h-screen flex flex-col justify-center items-center align-middle '>

      <div className='border-8 '>

        <div className='flex flex-col justify-center items-center align-middle '>


          <div className=' grid grid-cols-4 bg-red-300  w-80 gap-y-4  gap-x-2 p-4 justify-items-center '>
            <input className='w-full p-1 text-4xl col-span-4 overflow-hidden text-right'
              type="text"
              value={input}
              onChange={(e) => handleChance(e)}
            />
            <button className='btn btn-operator ' value="AC">AC</button>
            <button className='btn btn-operator ' value="+/-">+/-</button>
            <button className='btn btn-operator ' value="%">%</button>
            <button className='btn btn-operator ' value="/">/</button>

            <button className='btn btn-number' value="7" onClick={(e) => handleClick(e)}>7</button>
            <button className='btn btn-number' value="8"  onClick={(e) => handleClick(e)}>8</button>
            <button className='btn btn-number' value="9"  onClick={(e) => handleClick(e)}>9</button>
            <button className='btn btn-operator' value="*"  >X</button>

            <button className='btn btn-number' value="4"  onClick={(e) => handleClick(e)}>4</button>
            <button className='btn btn-number' value="5"  onClick={(e) => handleClick(e)}>5</button>
            <button className='btn btn-number' value="6"  onClick={(e) => handleClick(e)}>6</button>
            <button className='btn btn-operator'value="-">-</button>

            <button className='btn btn-number' value="1"  onClick={(e) => handleClick(e)}>1</button>
            <button className='btn btn-number' value="2"  onClick={(e) => handleClick(e)}>2</button>
            <button className='btn btn-number' value="3"  onClick={(e) => handleClick(e)}>3</button>

            <button className='btn btn-operator' value="+"  >+</button>

            <button className='btn btn-number ' value="0"  onClick={(e) => handleClick(e)}>0</button>
            <button className='btn btn-number'  value="." >.</button>
            <button className='btn btn-operator col-span-2'>=</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
