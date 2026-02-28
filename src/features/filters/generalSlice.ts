import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultMonths } from './components/CheckboxMonths';
import { defaultPersons } from './components/CheckboxPerson';
import { defaultSellTypes } from './components/CheckboxSellType';
import { defaultValidities } from './components/CheckboxValidity';
import { defaultBarOrder } from '../../shared/components/BarGeneratorButton';
import { GeneralState } from '../../shared/types';

const initialState: GeneralState = {
  months: defaultMonths,
  person: defaultPersons,
  sellType: defaultSellTypes,
  validity: defaultValidities,
  color: 'nivo',
  barLayoutValue: 'vertical',
  barGroupingValue: 'stacked',
  barDataKeys: defaultBarOrder,
  serverUrl: process.env.REACT_APP_API_URL || 'http://localhost:8081',
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    updateMonths: (state, action: PayloadAction<string[]>) => {
      state.months = action.payload;
    },
    updatePersons: (state, action: PayloadAction<string[]>) => {
      state.person = action.payload;
    },
    updateSellTypes: (state, action: PayloadAction<string[]>) => {
      state.sellType = action.payload;
    },
    updateValidity: (state, action: PayloadAction<string[]>) => {
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
    updateServerUrl: (state, action: PayloadAction<string>) => {
      state.serverUrl = action.payload;
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
  updateServerUrl,
} = generalSlice.actions;

export default generalSlice.reducer;
