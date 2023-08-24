import { Modal, Image } from 'react-bootstrap'
import useDrinks from '../hooks/useDrinks'

const DrinkModal = () => {
  const { modal, handleModalClick, recipe, loading } = useDrinks();

  const showIngredients = () => {
    let ingredients = [];
    for (let i = 1; i < 16; ++i) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {recipe[`strIngredient${i}`]} {recipe[`strMeasure${i}`]}
          </li>
        );
      } else {
        break;
      }
    }
    return ingredients;
  }
  return (
    !loading && (<Modal
      show={modal}
      onHide={handleModalClick}
    >

      <Image
        src={recipe.strDrinkThumb}
        alt={`imagen de ${recipe.strDrink}`}
      />
      <Modal.Header>
        <Modal.Title>
          {recipe.strDrink}
        </Modal.Title>

      </Modal.Header>
      <Modal.Body>
        <div className='p-3'>
          <h2>instrucciones: </h2>
          {
            recipe.strInstructionsES || recipe.strInstructions
          }
          <h2>Ingredientes y cantidades: </h2>
          {showIngredients()}
        </div>
      </Modal.Body>
    </Modal>)
  )
}

export default DrinkModal