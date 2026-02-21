import React from 'react';
import CheckboxTemplate from './CheckboxTemplate';
import { updatePersons } from '../generalSlice';
import { connect } from 'react-redux';
import { validateComponentChecks } from '../../../shared/utils/Functions';
import { RootState } from '../../../shared/types';

export const adults = 'Dospelý';
export const juniors = 'Juniori';
export const seniors = 'Dôchodcovia';
export const students = 'Študenti';
export const portable = 'Prenosná';
export const portableData = 'Prenosné';
export const children = 'Deti';

export const personArray = [adults, seniors, juniors, students, portable, children];
export const dataKeys = [adults, seniors, juniors, students, portableData, children];
export const defaultPersons = personArray;

interface CheckboxPersonProps {
  person: string[];
}

const CheckboxPerson: React.FC<CheckboxPersonProps> = ({ person }) => {
  const persons = personArray.map((p) => ({ itemName: p, isChecked: true }));

  const filterHeader = 'Filter podľa typu osoby';

  return (
    <CheckboxTemplate
      checkItems={validateComponentChecks(persons, person)}
      dispatchFunction={updatePersons}
      context={'person'}
      filterHeader={filterHeader}
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  person: state.generalReducer.person,
});

export default connect(mapStateToProps)(CheckboxPerson);
