import useDrinks from "../hooks/useDrinks"
import {Row} from 'react-bootstrap';
import Drink from "./Drink";

const ListDrinks = () => {
  const {drinks} = useDrinks();
  return (
    <Row className="mt-5" >
      {drinks?.map(drink => (
        <Drink drink={drink} key={drink.idDrink} />
      ))}
    </Row>
  )
}

export default ListDrinks