import {Col, Card, Button} from 'react-bootstrap';
import useDrinks from '../hooks/useDrinks';


const Drink = ({drink}) => {

  const {handleModalClick, handleDrinkId} = useDrinks();

  return (
    <Col md={2} lg={3}>
      <Card className='md-4 mt-2'>
        <Card.Img 
          variant='top'
          src={drink?.strDrinkThumb}
          alt={`Imagen de ${drink?.strDrink}`}
        />
        <Card.Body>
          <Card.Title>
          {drink?.strDrink}
          </Card.Title>
          <Card.Text>
            Some more . . .
          </Card.Text>
          <Button
            variant={'info'}
            className='w-100 text-uppercase'
            onClick={() => {
              handleModalClick();
              handleDrinkId(drink.idDrink);
            }}
          >
            ver receta
          </Button>
        </Card.Body>


      </Card>

    </Col>
  )
}

export default Drink