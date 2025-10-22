import React, { useState } from 'react'
import LangageGrid from './components/LanguageGrid.jsx';
import AddLanuage from './components/AddLanuage.jsx';
import { languages } from './components/Dataset.js';

const App = () => {

  let [dataSetLanguages, setDataSetLanguages] = useState(languages)

  return (
    <>
    <AddLanuage dataSetLanguages={dataSetLanguages} dataSetLanguagesHandler={setDataSetLanguages} />
      <LanugageGrid dataSetLanguages={dataSetLanguages} />
    </>
  )
}