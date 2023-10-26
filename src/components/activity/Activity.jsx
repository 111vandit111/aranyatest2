import React from 'react'
import './Activity.css'

const Activity = ({item , flag}) => {
  return (
    <div className= { flag%2===0 ?'container-act ' : 'container-act rev'}>
        {
            
            flag%2===0 && <div className="img">
        <img src={item.img} alt={item.title} />
        
        </div>}
        <div className="dets">
        <div className="head">
        {item.title}
        </div>
        <p className="content">
        {item.desc}
        </p>

        </div>
        { flag%2!==0 && <div className="img">
        <img src={item.img} alt={item.title} />

        </div>}
    </div>
  )
}

export default Activity