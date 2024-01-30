import { useCallback, useEffect, useRef, useState } from 'react'

function App(props) {

  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() =>{
    let pass =''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if(numberAllowed) str+='0123456789'
    if(charAllowed) str += '!@#$%^&*()_+'

    for(let i=0 ; i<length ; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)

  } , [length,numberAllowed,charAllowed,setPassword])

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(()=>{
    passwordGenerator();
  } , [length,charAllowed,numberAllowed,passwordGenerator])

  return (
    <div className='flex justify-center items-center h-screen bg-gray-900'>
      <div className='w-full max-w-md mx-auto shadow-lg p-5 my-8 rounded-md text-orange-500 bg-gray-700'>
        <h1 className='text-xl text-white text-center my-3'>{props.name} Generator</h1>
        <div className='flex shadow-sm rounded-lg overflow-hidden mb-4'>
          <input
            className='w-full px-3 py-2 outline-none'
            type="text"
            value={password}
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button className='bg-orange-500 text-white px-3 py-2 shrink-0' 
          onClick={copyPassword}
          >Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              className='cursor-pointer'
              type="range"
              min={6}
              max={40}
              value={length}
              onChange={e => setlength(e.target.value)
              }
            />
            <label>Length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              className='cursor-pointer'
              type='checkbox'
              checked={numberAllowed}
              onChange={() => {setNumberAllowed((prev)=> !prev);}}
            />
            <label>Number</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              className='cursor-pointer'
              type='checkbox'
              checked={charAllowed}
              onChange={() => {setCharAllowed((prev)=> !prev);}}
            />
            <label>Character</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
