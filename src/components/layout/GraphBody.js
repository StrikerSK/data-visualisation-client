import React from "react";

export default ({graph, configs}) => {
    return (
        <div className="graph-main-box">
            <div className="graph-box">
                {graph}
            </div>
            <div className="graph-options-container">
                {configs}
            </div>
        </div>
    )
}