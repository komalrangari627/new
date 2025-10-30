import React, { useState, useEffect } from "react";
import LanguageGrid from "./components/LanguageGrid.jsx";
import AddLanguage from "./components/AddLanguage.jsx";
import { fetchData } from "./api/test.js";
import { languages } from "./components/Dataset.js";

const App = () => {
  // Uncomment if you want to use AddLanguage and LanguageGrid components
  // const [dataSetLanguages, setDataSetLanguages] = useState(languages);

  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    async function getTestData() {
      try {
        setResponseData({
  message: "Mock API working!",
  checkCode: 200,
  userData: { name: "Komal", phone: "723451245" }
});

      } catch (err) {
        console.error("Error while getting data:", err);
      }
    }

    getTestData();
  }, []);

  return (
    <>
      <div className="flex justify-center items-center gap-20">
        <button
          onClick={async () => {
            try {
              const response = await fetchData();
              setResponseData(response.data);
            } catch (err) {
              console.error("Error fetching data:", err);
            }
          }}
          className="text-white bg-black p-2 my-10 rounded-lg"
        >
          Fetch Data
        </button>

        {responseData && (
          <div className="text-left bg-gray-100 p-5 rounded-lg shadow-md">
            <h1 className="font-bold text-xl mb-2">
              message: {responseData.message}
            </h1>
            <h1 className="font-semibold text-gray-700 mb-2">
              checkCode: {responseData.checkCode}
            </h1>
            <div>
              <h2 className="font-bold">userData:</h2>
              <ul className="list-disc list-inside">
                <li>{responseData.userData.name}</li>
                <li>{responseData.userData.phone}</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Uncomment when you want to show the grid */}
      {/* 
      <AddLanguage
        dataSetLanguages={dataSetLanguages}
        dataSetLanguagesHandler={setDataSetLanguages}
      />
      <LanguageGrid dataSetLanguages={dataSetLanguages} /> 
      */}
    </>
  );
};

export default App;
