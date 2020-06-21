import React from 'react'

export default function RubicButtons({turnUp, stop, turnLeft, turnRight, turnDown, shuffleIt,solve, handleAnimation}) {
    return (
        <div className='controlPanel'>
        <button
          onClick={handleAnimation}
          className="addTaskButton"
        >
          Move around!
        </button>
            <div className="up-down-nav">
            <div>   <img onMouseEnter={turnUp} onMouseOut={stop} className='moveup' src='/arrow.svg' alt=''/>
            Up</div>
        <div className="left-right-nav">
        <img onMouseEnter={turnLeft} onMouseOut={stop} className='moveleft' src='/arrow.svg' alt=''/>
        Left Right
         <img onMouseEnter={turnRight} onMouseOut={stop} className='moveright' src='/arrow.svg' alt=''/>
        </div>
        <div>  Down
        <img onMouseEnter={turnDown} onMouseOut={stop} className='movedown' src='/arrow.svg' alt=''/>
        </div>
        </div>
        <button onClick={shuffleIt} className='addTaskButton'>Shuffle!</button>
        <button onClick={solve} className='addTaskButton'>Solve!</button>
      </div>
    )
}
