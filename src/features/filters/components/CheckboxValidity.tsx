import React from 'react';
import { connect } from 'react-redux';
import { updateValidity } from '../generalSlice';
import CheckboxTemplate from './CheckboxTemplate';
import { accessValidity } from '../../../shared/utils/ReduceAccessor';
import { validateComponentChecks } from '../../../shared/utils/Functions';
import { RootState } from '../../../shared/types';

const month = 'Mesačná';
const three_month = '3 Mesačná';
const five_month = '5 Mesačná';
const yearly = 'Ročná';

export const validityArray = [month, three_month, five_month, yearly];
export const defaultValidities = validityArray;

interface CheckboxValidityProps {
  validity: string[];
}

const CheckboxValidity: React.FC<CheckboxValidityProps> = ({ validity }) => {
  const validities = validityArray.map((v) => ({ itemName: v, isChecked: true }));

  const filterHeader = 'Filter podľa dĺžky platnosti';

  return (
    <CheckboxTemplate
      checkItems={validateComponentChecks(validities, validity)}
      dispatchFunction={updateValidity}
      context={'validity'}
      filterHeader={filterHeader}
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  validity: accessValidity(state),
});

export default connect(mapStateToProps)(CheckboxValidity);
