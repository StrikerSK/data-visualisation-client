import React from 'react';
import { updateMonths } from '../generalSlice';
import CheckboxTemplate from './CheckboxTemplate';
import { connect } from 'react-redux';
import { validateComponentChecks } from '../../../shared/utils/Functions';
import { RootState } from '../../../shared/types';

export const january = 'Január';
export const february = 'Február';
export const march = 'Marec';
export const april = 'Apríl';
export const may = 'Máj';
export const june = 'Jún';
export const july = 'Júl';
export const august = 'August';
export const september = 'September';
export const october = 'Október';
export const november = 'November';
export const december = 'December';

export const monthArray = [
  january,
  february,
  march,
  april,
  may,
  june,
  july,
  august,
  september,
  october,
  november,
  december,
];

export const defaultMonths = monthArray;

interface CheckboxMonthsProps {
  months: string[];
}

const CheckboxMonths: React.FC<CheckboxMonthsProps> = ({ months }) => {
  const constMonths = monthArray.map((m) => ({ itemName: m, isChecked: true }));

  const filterHeader = 'Filter podľa mesiacov';

  return (
    <CheckboxTemplate
      checkItems={validateComponentChecks(constMonths, months)}
      dispatchFunction={updateMonths}
      context={'month'}
      filterHeader={filterHeader}
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  months: state.generalReducer.months,
});

export default connect(mapStateToProps)(CheckboxMonths);
