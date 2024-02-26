import SelectColorScheme from "../../components/controlls/selects/SelectColorScheme";
import React from "react";
import {DefaultConfiguration} from "../AbstractCharts";

export const DefaultNivoConfiguration = [
    ...DefaultConfiguration,
    <SelectColorScheme/>
]