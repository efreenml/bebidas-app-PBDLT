import {useState, useEffect, createContext } from 'react';
import axios from 'axios';
const categoryContext = createContext();

// eslint-disable-next-line react/prop-types
const CategoryProvider = ({children}) => {
  const [categories, setCategories] = useState([])

  const getCategories = async () => {
    try {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const {data} = await axios(url);
      setCategories(data.drinks);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    
    getCategories();

  }, [])
  

  return (
    <categoryContext.Provider
      value={{categories}}
    >
      {children}
    </categoryContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default categoryContext;

export {
  CategoryProvider
}