import React from 'react'


export default function ClockDigital({date}) {
    return (
        <div class='digitalClock out'>
        <div class='digitalClock in'>
        <h1 class='digital'>{date.toLocaleDateString()}</h1>
        <h1 class='digital'>{date.toLocaleTimeString()}</h1>
        </div>
        </div>
    )
}
