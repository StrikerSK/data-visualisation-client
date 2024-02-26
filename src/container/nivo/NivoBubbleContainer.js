import React from "react";

import NivoBubbleComponent from "../../components/nivo/NivoBubbleComponent";
import GraphComponent from "../../components/layout/GraphComponent";
import {DefaultNivoConfiguration} from "./AbstractNivo";

export default () => <GraphComponent graph={<NivoBubbleComponent/>} configs={DefaultNivoConfiguration}/>;