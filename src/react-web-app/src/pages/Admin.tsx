import { AppShell } from '@mantine/core';
import Header from '../components/Header';
import Ingredients from '../components/Ingredients';
import Orders from '../components/Orders';
import { createContext, useState } from 'react';
import GeneralButton from '../components/Buttons';
import { Navigate } from 'react-router-dom';
import React from "react"

export const arrContext = createContext([
  "Hi",
  "Hello",
  "Bonjour"
]);

function Admin(props: any) {

  const [goToMain, setgoToMain] = React.useState(false);

  var arr = [
    "Drink 1",
    "Drink 2",
    "Drink 3"
  ];
  
  const [arr1, setArr] = useState(arr)
  props.ingredients.pump1 = 'Vodka'
  props.ingredients.pump2 = 'AppleSauce'
  props.ingredients.pump3 = 'Ketchup'
  props.ingredients.pump4 = 'Water'
  return (
    <AppShell
      fixed
      header={<Header height={90} padding='md' signedin={{signedin: true, admin:true}} page='admin' />}
    >
    <Ingredients />
    <Orders arr={arr}/>
    </AppShell>

  );
}



export default Admin;
