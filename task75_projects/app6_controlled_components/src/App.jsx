import React, { useState } from 'react'
import LanguageGrid from './components/LanguageGrid.jsx'
import AddLanguage from './components/AddLanguage.jsx'
import { languages } from './components/Dataset.jsx'

const App = () => {
  const [dataSetLanguages, setDataSetLanguages] = useState(languages)

  const handleAddLanguage = (newLanguage) => {
    setDataSetLanguages((prev) => [newLanguage, ...prev])
  }

  return (
    <>
      <AddLanguage onAdd={handleAddLanguage} />
      <LanguageGrid dataSetLanguages={dataSetLanguages} />
    </>
  )
}

export default App
