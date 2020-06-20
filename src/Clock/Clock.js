import React, { useState, useEffect } from "react";
import ClockDigital from './ClockDigital';
import ClockAnalog from './ClockAnalog'

const defaultDate = new Date();

export default function Clock() {
    const [date, setDate] = useState(defaultDate);
    const [digital, setDigital] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => setDate(new Date()),
         1000);
        return () => {
            clearInterval(interval)
        }
    }, [])

    const handleClick = () => {
        setDigital(prev=>!prev)
    }

    return (
        <div>
        <button className='btn switch' onClick={handleClick}>Switch to {digital ? 'analog' : 'digital'}</button>
        {digital
        ? <ClockDigital date={date} />
        : <ClockAnalog date={date} />
        }
        </div>
    )
}
