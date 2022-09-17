import React from "react";
import {GraphContainer} from "../../components/LayoutContainers";
import NivoStreamComponent from "../../components/nivo/NivoStreamComponent";

export default () => {
    return (
        <GraphContainer>
            <NivoStreamComponent/>
        </GraphContainer>
    );
};