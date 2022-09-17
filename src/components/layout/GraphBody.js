import OptionComponent from "../OptionComponent";
import React from "react";

export default ({graph, configs}) => {
    return (
        <div className="graph-main-box">
            <div className="graph-box">
                {graph}
            </div>
            <OptionComponent>
                {configs}
            </OptionComponent>
        </div>
    )
}