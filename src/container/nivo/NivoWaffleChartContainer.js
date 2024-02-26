import NivoWaffleComponent from "../../components/nivo/NivoWaffleComponent";
import React from "react";
import GraphComponent from "../../components/layout/GraphComponent";
import {DefaultConfiguration} from "./AbstractNivo";

export default () => <GraphComponent graph={<NivoWaffleComponent/>} configs={DefaultConfiguration}/>;