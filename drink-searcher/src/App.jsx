import { Container } from 'react-bootstrap';
import Form from './components/Form';
import { CategoryProvider } from './context/CategoryProvider';
import { DrinksProvider } from './context/DrinksProvider';
import ListDrinks from './components/ListDrinks';
import DrinkModal from './components/DrinkModal';

function App() {

  return (
    <CategoryProvider>
      <DrinksProvider>
        <header className="py-5" >
          <h1>Buscador de bebidas</h1>
        </header>

        <Container className='mt-5' >
          <Form />
          <ListDrinks />
          <DrinkModal />
        </Container>
      </DrinksProvider>
    </CategoryProvider>
  )
}

export default App
