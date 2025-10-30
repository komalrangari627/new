import React, { useState } from 'react'
import "../styles/style.scss"

const AddLanguage = ({ onAdd }) => {
    const [formData, setFormData] = useState({
        title: "",
        scope: [],
        difficulties: "",
        duration: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.title || !formData.scope.length || !formData.duration || !formData.difficulties) return

        onAdd(formData)
        setFormData({ title: "", scope: [], difficulties: "", duration: "" })
    }

    const handleChange = (e) => {
        let { name, value } = e.target
        if (name === "scope") {
            value = value.split(",").map(item => item.trim())
        }
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    return (
        <div className="add-language-container">
            <form onSubmit={handleSubmit} className="add-language-form">
                <h1 className="text-center font-bold text-2xl mb-4">Add Language!</h1>

                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <input
                    type="text"
                    name="scope"
                    placeholder="Scope (comma separated)"
                    value={formData.scope}
                    onChange={handleChange}
                    required
                />

                <input
                    type="number"
                    name="duration"
                    placeholder="Duration (weeks)"
                    value={formData.duration}
                    onChange={handleChange}
                    required
                    min={1}
                />

                <select
                    name="difficulties"
                    value={formData.difficulties}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Difficulty</option>
                    <option value="Easy">Easy</option>
                    <option value="Medium">Medium</option>
                    <option value="Hard">Hard</option>
                </select>

                <button
                    type="submit"
                    className="bg-green-500 font-bold text-white hover:bg-green-700 px-5 py-2 mt-4 transition-all"
                >
                    Add Language
                </button>
            </form>
        </div>
    )
}

export default AddLanguage
