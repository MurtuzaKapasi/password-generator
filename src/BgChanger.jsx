import React, { useState } from 'react'

function BgChanger() {
    const [color , setColor] = useState("#2e2e2e")

    const backgroundChanger = (color) => {
        setColor(color);
    }

    return (
        <div className='w-full h-screen  ' style={{ backgroundColor: color }}>
            <div className=' p-5 flex flex-wrap items-center justify-center fixed bottom-0 w-full' >
                <div className='w-max items-center bottom-2  flex flex-wrap justify-center py-3 px-6 gap-4 text-white bg-gray-300 rounded-3xl '>
                    <button className='rounded-2xl bg-gray-400 p-2' onClick={e => {backgroundChanger("red")}} style={{ backgroundColor: "red" }}>Red</button>
                    <button className='rounded-2xl bg-gray-400 p-2 ' onClick={e => {backgroundChanger("green")}}  style={{ backgroundColor: "green" }}>Green</button>
                    <button className='rounded-2xl bg-gray-400 p-2 ' onClick={e => {backgroundChanger("yellow")}} style={{ backgroundColor: "yellow" }}>Yellow</button>
                    <button className='rounded-2xl bg-gray-400 p-2 ' onClick={e => {backgroundChanger("purple")}}  style={{ backgroundColor: "purple" }}>Purple</button>
                    <button className='rounded-2xl bg-gray-400 p-2 ' onClick={e => {backgroundChanger("orange")}}  style={{ backgroundColor: "orange" }}>Orange</button>
                    <button className='rounded-2xl bg-gray-400 p-2 ' onClick={e => {backgroundChanger("powderblue")}}  style={{ backgroundColor: "powderblue" }}>Blue</button>
                    <button className='rounded-2xl bg-gray-400 p-2 ' onClick={e => {backgroundChanger("pink")}}  style={{ backgroundColor: "pink" }}>Pink</button>
                </div>
            </div>
        </div>
    )
}

export default BgChanger
