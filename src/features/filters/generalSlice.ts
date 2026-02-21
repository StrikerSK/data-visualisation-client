import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultMonthRequestParams } from './components/CheckboxMonths';
import { defaultPersonRequestParams } from './components/CheckboxPerson';
import { defaultSellTypeRequestParams } from './components/CheckboxSellType';
import { defaultValidityRequestParams } from './components/CheckboxValidity';
import { defaultBarOrder } from '../../shared/components/BarGeneratorButton';
import { GeneralState } from '../../shared/types';

const initialState: GeneralState = {
  months: defaultMonthRequestParams,
  person: defaultPersonRequestParams,
  sellType: defaultSellTypeRequestParams,
  validity: defaultValidityRequestParams,
  color: 'nivo',
  barLayoutValue: 'vertical',
  barGroupingValue: 'stacked',
  barDataKeys: defaultBarOrder,
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    updateMonths: (state, action: PayloadAction<string>) => {
      state.months = action.payload;
    },
    updatePersons: (state, action: PayloadAction<string>) => {
      state.person = action.payload;
    },
    updateSellTypes: (state, action: PayloadAction<string>) => {
      state.sellType = action.payload;
    },
    updateValidity: (state, action: PayloadAction<string>) => {
      state.validity = action.payload;
    },
    updateColor: (state, action: PayloadAction<string>) => {
      state.color = action.payload;
    },
    updateBarLayout: (state, action: PayloadAction<'vertical' | 'horizontal'>) => {
      state.barLayoutValue = action.payload;
    },
    updateBarGrouping: (state, action: PayloadAction<'stacked' | 'grouped'>) => {
      state.barGroupingValue = action.payload;
    },
    updateBarDataKeys: (state, action: PayloadAction<string[]>) => {
      state.barDataKeys = action.payload;
    },
  },
});

export const {
  updateMonths,
  updatePersons,
  updateSellTypes,
  updateValidity,
  updateColor,
  updateBarLayout,
  updateBarGrouping,
  updateBarDataKeys,
} = generalSlice.actions;

export default generalSlice.reducer;
