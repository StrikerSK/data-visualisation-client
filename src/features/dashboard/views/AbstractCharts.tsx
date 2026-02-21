import CheckboxPerson from '../../filters/components/CheckboxPerson';
import CheckboxValidity from '../../filters/components/CheckboxValidity';
import CheckboxMonths from '../../filters/components/CheckboxMonths';
import CheckboxSellType from '../../filters/components/CheckboxSellType';
import React, { ReactNode } from 'react';

export const DefaultConfiguration: ReactNode[] = [
  <CheckboxPerson key="person" />,
  <CheckboxValidity key="validity" />,
  <CheckboxMonths key="months" />,
  <CheckboxSellType key="sellType" />,
];
