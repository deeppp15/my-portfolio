import React from 'react'

import "./DataMiningMainStyle.css"

import DataMiningCard from "./DataMiningCard";
import DataMiningContent from "./DataMiningContent";

const DataMiningMain =(props) =>{
  return (
    <div className="data-container">
      <h1 className="data-heading">Data Mining Topics</h1>
        <div className="data-container">
           {DataMiningContent.map((val,ind) =>{
            return(
                <DataMiningCard key={ind}
                          imgsrc={val.imgsrc}
                        title={val.title}
                        text={val.text}
                        report={val.report}
                        src={val.src}
                        />
            )
           })}
        </div>
    </div>
  )
}

export default DataMiningMain;