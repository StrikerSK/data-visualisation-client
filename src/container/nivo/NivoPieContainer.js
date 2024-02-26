import React from "react";

import NivoPieComponent from "../../components/nivo/NivoPieComponent";
import GraphComponent from "../../components/layout/GraphComponent";
import {DefaultNivoConfiguration} from "./AbstractNivo";

export default () => <GraphComponent graph={<NivoPieComponent/>} configs={DefaultNivoConfiguration}/>;