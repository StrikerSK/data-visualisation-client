import React from "react";
import ModalWindow from "./ModalWindow";
import {LinkMenuBox} from "./LinkMenuBox";
import GeneralHeader from "./layout/GeneralHeader";

export default ({children}) => {
    return (
        <div className="dashboard-component">
            <GeneralHeader>
                <ModalWindow/>
                <h1>Predajnosť lístkov PID</h1>
                <LinkMenuBox/>
            </GeneralHeader>

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
