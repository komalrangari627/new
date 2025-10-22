import React, { useState } from 'react'
import "../styles/style.scss";

const LanugageGrid = (props) => {
    return (
        <div className='language-grid'>
            <h1 className='font-bold text-3xl text-center my-10'>Language Grid !</h1>
            <div className='grid-container'>
                {
                     props.dataSetLanguages.map((item, index) => {
                        return (
    <div key={index} className='grid-item'>
        <h1 className='title'>{item.title}</h1>
        <h2>
            {item.description}
        </h2>
        <h2 className='difficulties'>
            <span>Difficulties : </span>
            <span className={
                item.difficulties.toLowerCase() === "hard"
                    ? "bg-red-400 p-2"
                    : item.difficulties.toLowerCase() === "easy"
                    ? "bg-green-400 p-2"
                    : item.difficulties.toLowerCase() === "medium"
                    ? "bg-yellow-300 p-2"
                    : ""
            }>
                {item.difficulties}
            </span>
        </h2>
    </div>
)
                    })
                }
            </div>
        </div>
    )
}
