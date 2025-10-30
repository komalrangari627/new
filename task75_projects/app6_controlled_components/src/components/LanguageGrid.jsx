import React, { useState } from 'react'
import "../styles/style.scss"

const LanguageGrid = (props) => {
    return (
        <div className='language-grid'>
            <h1 className='font-bold text-3xl text-center my-10'>Language Grid !</h1>
            <div className='grid-container'>
                {
                     props.dataSetLanguages.map((item, index) => {
                        return (
                           <div
        key={index}
        className={`grid-item ${
          item.difficulties.toLowerCase() === "hard"
            ? "border-hard"
            : item.difficulties.toLowerCase() === "medium"
            ? "border-medium"
            : "border-easy"
        }`}
      >
        <h1 className="title">{item.title}</h1>

        <div className="scope">
          <span>Scope:</span>
          <div className="scope-tags">
            {item.scope.map((sc, i) => (
              <span key={i} className="scope-tag">
                {sc}
              </span>
            ))}
          </div>
        </div>

        <h2 className="duration">
          <span>Duration:</span>
          <span className="duration-value">{item.duration} weeks</span>
        </h2>

        <h2 className="difficulties">
          <span>Difficulties:</span>
          <span
            className={`difficulty-badge ${
              item.difficulties.toLowerCase() === "hard"
                ? "hard"
                : item.difficulties.toLowerCase() === "medium"
                ? "medium"
                : "easy"
            }`}
          >
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

export default LanguageGrid;