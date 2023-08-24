import {useContext} from 'react';
import categoryContext from '../context/CategoryProvider';

const useCategories = () => {
  return useContext(categoryContext);
}

export default useCategories;
