import React,{useState,useEffect} from 'react'
import ProgressBar from './components/ProgressBar'
import './App.css'

function App(){
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(()=>{
      setValue((val)=>val+1)
    },100)
  }, [])



  return (
    <div className='app'>
      <span>My progressBar</span>
      <ProgressBar value={value} onComplete ={()=>setSuccess(true)} />
      <span style={{color:success?"green":'blue'}}>{success?"Completed":"...Loading"}</span>
    </div>
  )
}

export default App
