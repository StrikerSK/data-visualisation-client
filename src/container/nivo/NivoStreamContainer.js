import React from "react";
import GraphComponent from "../../components/layout/GraphComponent";
import NivoStreamComponent from "../../components/nivo/NivoStreamComponent";
import {DefaultConfiguration} from "./AbstractNivo";

export default () => <GraphComponent graph={<NivoStreamComponent/>} configs={DefaultConfiguration}/>;
