import {useContext} from 'react';
import drinksContext from '../context/DrinksProvider';

const useDrinks = () => {
  return useContext(drinksContext);
}

export default useDrinks;
