import React from "react";

import NivoLineComponent from "../../components/nivo/NivoLineComponent";
import GraphComponent from "../../components/layout/GraphComponent";
import {DefaultNivoConfiguration} from "./AbstractNivo";

export default () => <GraphComponent graph={<NivoLineComponent/>} configs={DefaultNivoConfiguration}/>;