import React from "react";
import ModalWindow from "../ModalWindow";
import {LinkMenuBox} from "../LinkMenuBox";
import GeneralHeader from "./GeneralHeader";

export default () => {
    return (
        <GeneralHeader>
            <ModalWindow/>
            <h1>Predajnosť lístkov PID</h1>
            <LinkMenuBox/>
        </GeneralHeader>
    )
};