import { useState } from 'react';
import { Button, Form as FormBootstrap, Row, Col, Alert } from 'react-bootstrap';

import useCategories from '../hooks/useCategories';
import useDrinks from '../hooks/useDrinks';


const Form = () => {

  const [search, setSearch] = useState({
    name:'',
    category:''
  })
  const [alert, setAlert] = useState('');
  const {categories} = useCategories();
  const {consultDrink} = useDrinks();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(Object.values(search).includes('')) {
      setAlert('Todos los campos son requeridos');
      return;
    }
    setAlert('');
    consultDrink(search);

  }
  return (
    <FormBootstrap
      onSubmit={handleSubmit}
    >
      {alert && <Alert variant='danger' className='text-center' > {alert} </Alert>}
      <Row>
        <Col md={6} >
          <FormBootstrap.Group className='mb-3' >
            <FormBootstrap.Label
              htmlFor='name'
            >
              nombre bebida:
            </FormBootstrap.Label>
            <FormBootstrap.Control
              id='name'
              type='text'
              name='name'
              placeholder='Ej: café, arándano'
              onChange={e => setSearch({
                ...search,
                [e.target.name]: e.target.value
              })}
            />
          </FormBootstrap.Group>
        </Col>

        <Col md={6} >

          <FormBootstrap.Group className='mb-3' >
            <FormBootstrap.Label
              htmlFor='category'
            >
              Categoria bebida:
            </FormBootstrap.Label>
            <FormBootstrap.Select
              id='cateogry'
              name='category'
              value={search.category}
              onChange={e => setSearch({
                ...search,
                [e.target.name]: e.target.value
              })}
            >
              <option>- selecciona categoría -</option>
              {categories.map(category => (
                <option
                  key={category.strCategory}
                  label={category.strCategory}
                  value={category.strCategory}
                >

                </option>
              ))}
            </FormBootstrap.Select>

          </FormBootstrap.Group>
        </Col>

      </Row>
      <Row className='justify-content-end'>
        <Col md={3}>
                <Button
                  variant='danger'
                  className='text-uppercase w-100'
                  type='submit'
                >
                  buscar bebidas
                </Button>
        </Col>
      </Row>
    </FormBootstrap>
  )
}

export default Form