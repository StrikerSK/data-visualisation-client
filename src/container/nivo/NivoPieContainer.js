import React from "react";

import NivoPieComponent from "../../components/nivo/NivoPieComponent";
import GraphComponent from "../../components/layout/GraphComponent";
import {DefaultConfiguration} from "./AbstractNivo";

export default () => <GraphComponent graph={<NivoPieComponent/>} configs={DefaultConfiguration}/>;