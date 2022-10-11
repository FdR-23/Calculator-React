import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0);
  const [firstnum, setFirstNum] = useState(0);
  const [operator, setOperator] = useState();



  const clear = (e) => {
    e.preventDefault()
    setNum(0)
    setOperator()
    setFirstNum(0)
  }

  const changeSinge = () => {
    if (num > 0) {
      setNum(-num)
    } else
      setNum(Math.abs(num))
  }


  const handleOperator = (e) => {
    const inputOperator = e.target.value
    setFirstNum(num);
    setOperator(inputOperator)
    setNum(0)
    if (operator) {
      calculator()
    }
  }


  const handleClick = (e) => {
    let input = e.target.value


    if (!num && input === ".") {
      return
    } else if (num && num.includes(".") && input === ".") {
      return
    }


    if (num !== 0 && operator) {
      setNum(0)
      setNum(num + input)
    } else if (num === 0) {
      setNum(input)
    } else {
      setNum(num + input)
    }

    if (num.length > 11) {
      setNum("Math Error")
    } else if (num === "Math Error") {
      setNum(0)
    }
  }

  const porcentage = () => {
    setNum(num / 100)
  }

  const calculator = () => {
    switch (operator) {
      case '+':
        const result = (parseFloat(firstnum) + parseFloat(num))
        setNum(result)
        break;
      case '-':
        setNum(parseFloat(firstnum) - parseFloat(num))
        break;
      case '/':
        setNum(parseFloat(firstnum) / parseFloat(num))
        break;
      case '*':
        setNum(parseFloat(firstnum) * parseFloat(num))
        break;
      default:
        return 'Errors'
    }

  }


  return (
    <div className='m-auto  w-screen h-screen flex flex-col justify-center items-center align-middle bg-sky-200'>

      <div className='border-8 border-gray-500 rounded-lg shadow-black shadow-xl'>

        <div className='flex flex-col justify-center items-center align-middle '>


          <div className=' grid grid-cols-4 bg-slate-400  w-72 gap-y-4  gap-x-2 p-4 justify-items-center '>
            <div className='w-full h-16 p-1 text-4xl col-span-4 bg-slate-100 overflow-hidden rtl 
             flex flex-row-reverse items-center rounded-md'>
              <h1 className='w-full text-4xl  float-right whitespace-nowrap text-right '>{num}</h1>
            </div>
            <button className='btn btn-operator shadow-black shadow-sm' value="AC" onClick={(e) => clear(e)} >AC</button>
            <button className='btn btn-operator shadow-black shadow-sm ' value="+/-" onClick={() => changeSinge()}>+/-</button>
            <button className='btn btn-operator shadow-black shadow-sm ' value="%" onClick={(e) => porcentage(e)}>%</button>
            <button className='btn btn-operator shadow-black shadow-sm ' value="/" onClick={(e) => handleOperator(e)}>/</button>

            <button className='btn btn-number shadow-black shadow-sm' value="7" onClick={(e) => handleClick(e)}>7</button>
            <button className='btn btn-number shadow-black shadow-sm' value="8" onClick={(e) => handleClick(e)}>8</button>
            <button className='btn btn-number shadow-black shadow-sm' value="9" onClick={(e) => handleClick(e)}>9</button>
            <button className='btn btn-operator shadow-black shadow-sm' value="*" onClick={(e) => handleOperator(e)}>X</button>

            <button className='btn btn-number shadow-black shadow-sm' value="4" onClick={(e) => handleClick(e)}>4</button>
            <button className='btn btn-number shadow-black shadow-sm' value="5" onClick={(e) => handleClick(e)}>5</button>
            <button className='btn btn-number shadow-black shadow-sm' value="6" onClick={(e) => handleClick(e)}>6</button>
            <button className='btn btn-operator shadow-black shadow-sm' onClick={(e) => handleOperator(e)} value="-">-</button>

            <button className='btn btn-number shadow-black shadow-sm' value="1" onClick={(e) => handleClick(e)}>1</button>
            <button className='btn btn-number shadow-black shadow-sm' value="2" onClick={(e) => handleClick(e)}>2</button>
            <button className='btn btn-number shadow-black shadow-sm' value="3" onClick={(e) => handleClick(e)}>3</button>

            <button className='btn btn-operator shadow-black shadow-sm' value="+" onClick={(e) => handleOperator(e)}>+</button>

            <button className='btn btn-number shadow-black shadow-sm ' value="0" onClick={(e) => handleClick(e)}>0</button>
            <button className='btn btn-number shadow-black shadow-sm' value="." onClick={(e) => handleClick(e)} >.</button>
            <button className='btn btn-operator col-span-2 shadow-black shadow-sm' onClick={() => calculator()}>=</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
