import React, { useEffect, useState } from 'react'
import {MIN,MAX} from './constants'
import '../App.css'

const ProgressBar = ({value=0,onComplete=()=>{}}) => {
  const [percent, setPercent] = useState(value);
  useEffect(() => {
    setPercent(Math.min(MAX,Math.max(value,MIN)));
    if(value>=MAX){
      onComplete();
    }
  }, [value])



  return (
    <div className='progress'>
      <span style={{color:percent>49?"white":'black'}}>{percent.toFixed()}%</span>
      <div style={{transform:`scaleX(${percent/MAX})`,transformOrigin:'left'}}
      // style={{width:`${percent.toFixed()}%`}}
      className="fill"
      role='progressbar'
      aria-valuemax={MAX}
      aria-valuemin={MIN}
      aria-valuenow={percent.toFixed()}
      aria-label={`Progress is ${percent.toFixed()}percent`}
      ></div>
    </div>
  )
}

export default ProgressBar
