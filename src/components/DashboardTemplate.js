import React from "react";
import DashboardHeader from "./headers/DashboardHeader";

export default ({children}) => {
    return (
        <div className="dashboard-component">
            <DashboardHeader/>
            <div className="dashboard-container">
                <div className="dashboard-element">
                    {children[0]}
                </div>
                <div className="dashboard-element">
                    {children[1]}
                </div>
                <div className="dashboard-element">
                    {children[2]}
                </div>
                <div className="dashboard-element">
                    {children[3]}
                </div>
            </div>
        </div>
    );
};
