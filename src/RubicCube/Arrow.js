import React from 'react'

export default function arrow({color, l,r,u,d , ind, site}) {

  const left = () => {
    l(ind,site)
  }
  const right = () => {
    r(ind,site)
  }
  const up = () => {
    u(ind,site)
  }
  const down = () => {
    d(ind,site)
  }


    return (
      <div style={{ backgroundColor: color }}>
      {color !== 'black'? (
        <>
        <img onClick={right} className='moveright' src='/arrow.svg' alt=''/>
        <img onClick={left} className='moveleft' src='/arrow.svg' alt=''/>
        <img onClick={up} className='moveup' src='/arrow.svg' alt=''/>
        <img onClick={down} className='movedown' src='/arrow.svg' alt=''/>

      </>)
      : null}
      </div>
)
}

