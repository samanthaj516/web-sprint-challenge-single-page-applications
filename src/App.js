import React, { useState, useEffect } from "react";
import { Route, Link, Switch, useHistory } from 'react-router-dom';
import * as Yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import Home from './Components/Home';
import Form from './Components/Form';
import Order from './Components/Order';
import FormSchema from './validation/FormSchema';

const StyledApp = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  min-height: 100vh;
  header {
    width: 100%;
    align-items: center;
    background: blue;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    a {
      text-decoration: none;
      color: white;
    }
  }
  nav a {
    font-weight: normal;
    padding: 5px 15px;
    font-size: 1rem;
    :hover {
      color: grey;
    }
  h1 {
    font-size: 1.5rem;
    margin: 0;
    font-weight: bold;
  }
  }
`;

const initialForm = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  onions: false,
  greenPepper: false,
  dicedTomatoes: false,
  instructions: '',
}

const initialFormErrors = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: '',
  sausage: '',
  onions: '',
  greenPepper: '',
  dicedTomatoes: '',
  instructions: '',
}

const initialDisabled = true;

const App = () => {
  const [form, setForm] = useState(initialForm);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [order, setOrder] = useState({});
  const [disabled, setDisabled] = useState(initialDisabled) 

  let history = useHistory();

  const routeToOrder = () => {
      history.push("/pizza/order");
  }

  const postPizzaOrder = (pizza) => {
    axios.post('https://reqres.in/api/pizza', pizza)
    .then((response) => {
      console.log(response.data);
      setOrder({...order, ...response.data});
      setForm(initialForm);
      routeToOrder();
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const formSubmit = () => {
    postPizzaOrder(form);
  }

  const inputChange = (name, value) => {
    Yup.reach(FormSchema, name)
    .validate(value)
      .then(() => {setFormErrors({...formErrors, [name]: ''})})
      .catch((error) => {setFormErrors({...formErrors, [name]: error.errors[0]})})
    setForm({
      ...form,
      [name]: value
    })
  }

  useEffect(() => {
    FormSchema.isValid(form)
    .then(isValid => setDisabled(!isValid))
  }, [form])

  return (
    <StyledApp>
      <header>
        <Link to="/"><h1>Lambda Eats</h1></Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/pizza">Order Pizza</Link>
        </nav>
      </header>
      <Switch>
        <Route path="/pizza/order">
          <Order order={order} />
        </Route>
        <Route path="/pizza">
          <Form 
            submit={formSubmit} 
            inputChange={inputChange}
            form={form}
            formErrors={formErrors}
            disabled={disabled}
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </StyledApp>
  );
};
export default App;