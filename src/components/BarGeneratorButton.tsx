import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { updateBarDataKeys } from '../lib/actions';
import {
  adults,
  children,
  dataKeys,
  juniors,
  seniors,
  students,
} from './controlls/checkboxes/CheckboxPerson';

const portable = 'Prenosné';
export const defaultBarOrder = dataKeys;

const BarGeneratorButton: React.FC = () => {
  const dispatch = useDispatch();

  const generateBarOrder = (): string[] => {
    const array = [adults, students, seniors, juniors, portable, children];
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
      // Pick a random index
      const index = Math.floor(Math.random() * counter);
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
    }

    return array;
  };

  const shuffle = () => {
    const barOrder = generateBarOrder();
    dispatch(updateBarDataKeys(barOrder));
  };

  return (
    <Button
      variant="contained"
      onClick={() => shuffle()}
      color="primary"
      sx={{
        margin: 1,
        width: '40%',
      }}
    >
      Zmeň poradie
    </Button>
  );
};

export default BarGeneratorButton;
