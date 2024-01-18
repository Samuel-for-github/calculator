import React, {useState} from 'react'

const Form = () => {

    const [input, setInput] = useState("")

    const btn = (e)=>{
        e.preventDefault();
    }

    const calculate = ()=>{
        try {
            setInput(eval(input))
        } catch (error) {
            setInput("Error")
        }
       
    }

  return (
   <form className='h-screen w-full flex flex-col justify-center' onSubmit={btn}>
    <input type="text" value={input}   readOnly className=' bg-gray-500 text-white py-4 text-3xl' name="" id="" />
    <div className='grid grid-cols-4 gap-3 p-5 text-3xl font-extrabold h-screen bg-black'>
    <button className='rounded-[100%] max-lg:h-[50%] bg-slate-300' onClick={()=> setInput((prev)=> prev+7)} >7</button>
    <button className='rounded-[100%] max-lg:h-[50%] bg-slate-300' onClick={()=> setInput((prev)=> prev+8)} >8</button>
    <button className='rounded-[100%] max-lg:h-[50%] bg-slate-300' onClick={()=> setInput((prev)=> prev+9)} >9</button>
    <button className='rounded-[100%] max-lg:h-[50%] bg-slate-300' onClick={()=> setInput((prev)=> prev+"*")} >*</button>
    <button className='rounded-[100%] max-lg:h-[50%] bg-slate-300' onClick={()=> setInput((prev)=> prev+4)} >4</button>
    <button className='rounded-[100%] max-lg:h-[50%] bg-slate-300' onClick={()=> setInput((prev)=> prev+5)} >5</button>
    <button className='rounded-[100%] max-lg:h-[50%] bg-slate-300' onClick={()=> setInput((prev)=> prev+6)} >6</button>
    <button className='rounded-[100%] max-lg:h-[50%] bg-slate-300' onClick={()=> setInput((prev)=> prev+"-")} >-</button>
    <button className='rounded-[100%] max-lg:h-[50%] bg-slate-300' onClick={()=> setInput((prev)=> prev+1)} >1</button>
    <button className='rounded-[100%] max-lg:h-[50%] bg-slate-300' onClick={()=> setInput((prev)=> prev+2)} >2</button>
    <button className='rounded-[100%] max-lg:h-[50%] bg-slate-300' onClick={()=> setInput((prev)=> prev+3)} >3</button>
    <button className='rounded-[100%] max-lg:h-[50%] bg-slate-300' onClick={()=> setInput((prev)=> prev+"+")} >+</button>
    <button className='rounded-[100%] max-lg:h-[50%] bg-slate-300' onClick={()=> setInput((prev)=> prev+0)} >0</button>
    <button className='rounded-[100%] max-lg:h-[50%] bg-slate-300' onClick={()=> setInput((prev)=> prev+".")} >.</button>
    <button className='rounded-[100%] max-lg:h-[50%] bg-slate-300' onClick={()=> setInput((prev)=> prev="") }>C</button>
    <button className='rounded-[100%] max-lg:h-[50%] bg-slate-300' onClick={calculate}>=</button>
    </div>
   </form>
  )
}

export default Form