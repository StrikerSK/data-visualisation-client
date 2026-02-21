import { RootState } from '../types';

export const accessSellType = (state: RootState) => {
  return state.generalReducer.sellType;
};

export const accessMonths = (state: RootState) => {
  return state.generalReducer.months;
};

export const accessPersons = (state: RootState) => {
  return state.generalReducer.person;
};

export const accessValidity = (state: RootState) => {
  return state.generalReducer.validity;
};

export const accessColor = (state: RootState) => {
  return state.generalReducer.color;
};

export const accessAll = (state: RootState) => {
  return {
    months: state.generalReducer.months,
    person: state.generalReducer.person,
    validity: state.generalReducer.validity,
    sellType: state.generalReducer.sellType,
    color: state.generalReducer.color,
    barGrouping: state.generalReducer.barGroupingValue,
    barLayout: state.generalReducer.barLayoutValue,
  };
};
