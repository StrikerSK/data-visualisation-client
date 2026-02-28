import CheckboxPerson from '../../filters/components/CheckboxPerson';
import CheckboxValidity from '../../filters/components/CheckboxValidity';
import CheckboxMonths from '../../filters/components/CheckboxMonths';
import CheckboxSellType from '../../filters/components/CheckboxSellType';
import SelectServerUrl from '../../filters/components/SelectServerUrl';
import React, { ReactNode } from 'react';

export const DefaultConfiguration: ReactNode[] = [
  <SelectServerUrl key="serverUrl" />,
  <CheckboxPerson key="person" />,
  <CheckboxValidity key="validity" />,
  <CheckboxMonths key="months" />,
  <CheckboxSellType key="sellType" />,
];
