import React from "react";
import "./styles/style.scss";

const LanguageGrid = (props) => {
  return (
    <div className="language-grid">
      <h1 className="font-bold text-3xl text-center my-10">Language Grid!</h1>
      <div className="grid-container">
        {props.dataSetLanguages.map((item, index) => (
          <div key={index} className="grid-item">
            <h1 className="title">{item.title}</h1>
            <div className="scope">
              <span>Scope :</span>
              <div className="flex gap-2 flex-wrap">
                {item.scope.map((element, index) => (
                  <span key={index} className="p-1 bg-gray-300">
                    {element}
                  </span>
                ))}
              </div>
            </div>
            <h2 className="duration">
              <span>Duration : </span>
              <span>{item.duration} weeks</span>
            </h2>
            <h2 className="difficulties">
              <span>Difficulties : </span>
              <span
                className={
                  item.difficulties.toLowerCase() === "hard"
                    ? "bg-red-400 p-2"
                    : item.difficulties.toLowerCase() === "easy"
                    ? "bg-green-400 p-2"
                    : item.difficulties.toLowerCase() === "medium"
                    ? "bg-yellow-300 p-2"
                    : ""
                }
              >
                {item.difficulties}
              </span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageGrid;
