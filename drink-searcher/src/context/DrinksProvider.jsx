import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
const drinksContext = createContext();

// eslint-disable-next-line react/prop-types
const DrinksProvider = ({ children }) => {
  const [drinks, setDrinks] = useState([]);
  const [modal, setModal] = useState(false);
  const [drinkId, setDrinkId] = useState('');
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    const getRecipe = async () => {
      if (!drinkId) {
        return;
      }
      try {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + drinkId;
        const {data} = await axios(url);
        setRecipe(data.drinks[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getRecipe();
  }, [drinkId])

  const consultDrink = async (datos) => {
    try {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.name}&c=${datos.category}`;

      const { data } = await axios(url);
      setDrinks(data.drinks);
    } catch (error) {
      console.log(error);
    }
  }

  const handleModalClick = () => {
    setModal(!modal);
  }
  const handleDrinkId = (id) => {
    setDrinkId(id);
  }
  return (
    <drinksContext.Provider
      value={{ consultDrink,
                drinks,
                handleModalClick,
                modal,
                handleDrinkId,
                recipe,
                loading
              }}
    >
      {children}
    </drinksContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default drinksContext;

export {
  DrinksProvider
}