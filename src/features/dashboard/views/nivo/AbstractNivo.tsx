import SelectColorScheme from '../../filters/components/SelectColorScheme';
import React, { ReactNode } from 'react';
import { DefaultConfiguration } from '../AbstractCharts';

export const DefaultNivoConfiguration: ReactNode[] = [
  ...DefaultConfiguration,
  <SelectColorScheme key="colorScheme" />,
];
