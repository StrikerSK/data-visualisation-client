import { Action } from '../types';

export const updatePersons = (personArray: string): Action => {
  return {
    type: 'UPDATE_PERSON',
    payload: personArray,
  };
};

export const updateSellTypes = (sellTypeArray: string): Action => {
  return {
    type: 'UPDATE_SELL_TYPE',
    payload: sellTypeArray,
  };
};

export const updateMonths = (months: string): Action => {
  return {
    type: 'UPDATE_MONTHS',
    payload: months,
  };
};

export const updateValidity = (validities: string): Action => {
  return {
    type: 'UPDATE_VALIDITY',
    payload: validities,
  };
};

export const updateColor = (color: string): Action => {
  return {
    type: 'UPDATE_COLOR',
    payload: color,
  };
};

export const updateBarLayout = (layoutOption: string): Action => {
  return {
    type: 'UPDATE_BAR_LAYOUT',
    payload: layoutOption,
  };
};

export const updateBarGrouping = (groupingOption: string): Action => {
  return {
    type: 'UPDATE_BAR_GROUPING',
    payload: groupingOption,
  };
};

export const updateBarDataKeys = (barDataKeys: string[]): Action => {
  return {
    type: 'UPDATE_BAR_DATA_KEYS',
    payload: barDataKeys,
  };
};
