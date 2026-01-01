import React from "react";
import GraphHeader from "./GraphHeader";
import GraphBody from "./GraphBody";

export default ({graph, configs}) => {
    return (
        <div className="graph-container">
            <GraphHeader/>
            <GraphBody graph={graph} configs={configs}/>
        </div>
    )
};