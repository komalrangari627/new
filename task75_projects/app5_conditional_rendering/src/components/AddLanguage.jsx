import React, { useState } from 'react'
import "../styles/style.scss"

const AddLanguage = () => {

    let [title, setTitle] = useState("")
    let [scope, setScope] = useState("")
    let [difficulties, setDifficulties] = useState("")
    let [duration, setDuration] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log({
            title, scope, difficulties, duration
        })
    }

    return (
        <div className='add-language-form'>
            <h1 className='my-10 text-center font-bold text-2xl'>Add Language!</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 w-1/3 mx-auto border border-dark p-6 rounded-md shadow-lg'>
                <input className="text-center mx-auto border border-black" onChange={(e) => setTitle(e.target.value)} type="text" placeholder='Title' value={title} />
                <input className="text-center mx-auto border border-black"onChange={(e) => setDuration(e.target.value)} type="text" placeholder='Duration (weeks)' value={duration} />
                <input className="text-center mx-auto border border-black"onChange={(e) => setScope(e.target.value)} type="text" placeholder='Scope' value={scope} />
                <input className="text-center mx-auto border border-black"onChange={(e) => setDifficulties(e.target.value)} type="text" placeholder='Difficulties' value={difficulties} />
                <button className='bg-green-500 font-bold text-white hover:bg-green-700 p-2 transition-all rounded-md'>Add Language</button>
            </form>
        </div>
    )
}

export default AddLanguage
