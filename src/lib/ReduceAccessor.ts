export const accessSellType = (state: any) => {
  return state.generalReducer.sellType;
};

export const accessMonths = (state: any) => {
  return state.generalReducer.months;
};

export const accessPersons = (state: any) => {
  return state.generalReducer.person;
};

export const accessValidity = (state: any) => {
  return state.generalReducer.validity;
};

export const accessColor = (state: any) => {
  return state.generalReducer.color;
};

export const accessAll = (state: any) => {
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
