export interface GeneralState {
  months: string;
  person: string;
  sellType: string;
  validity: string;
  color: string;
  barLayoutValue: 'vertical' | 'horizontal';
  barGroupingValue: 'stacked' | 'grouped';
  barDataKeys: string[];
}

export interface RootState {
  generalReducer: GeneralState;
  personReducer: string;
  sellTypeReducer: string;
  validityReducer: string;
}

export type ActionType =
  | 'UPDATE_MONTHS'
  | 'UPDATE_PERSON'
  | 'UPDATE_SELL_TYPE'
  | 'UPDATE_VALIDITY'
  | 'UPDATE_COLOR'
  | 'UPDATE_BAR_LAYOUT'
  | 'UPDATE_BAR_GROUPING'
  | 'UPDATE_BAR_DATA_KEYS';

export interface Action {
  type: ActionType;
  payload: any;
}
