import CheckboxPerson from '../components/controlls/checkboxes/CheckboxPerson';
import CheckboxValidity from '../components/controlls/checkboxes/CheckboxValidity';
import CheckboxMonths from '../components/controlls/checkboxes/CheckboxMonths';
import CheckboxSellType from '../components/controlls/checkboxes/CheckboxSellType';
import React, { ReactNode } from 'react';

export const DefaultConfiguration: ReactNode[] = [
  <CheckboxPerson key="person" />,
  <CheckboxValidity key="validity" />,
  <CheckboxMonths key="months" />,
  <CheckboxSellType key="sellType" />,
];
