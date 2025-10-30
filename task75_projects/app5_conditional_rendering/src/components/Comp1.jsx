import React, { useState } from 'react'

const Comp1 = () => {
    let [numbers, setNumbers] = useState([1, 2, 3, 4, 5, 6])

    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-2xl font-bold my-10 text-center'>
                React with Tailwind + SCSS Demo
            </h1>
            {
                numbers.map((number, index) => (
                    <h2 key={index} className='text-lg'>{number}</h2>
                ))
            }
        </div>
    )
}

export default Comp1
