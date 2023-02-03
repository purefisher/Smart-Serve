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

function Admin() {

  const [goToMain, setgoToMain] = React.useState(false);

  var arr = [
    "Hi",
    "Hello",
    "Bonjour"
  ];
  
  const [arr1, setArr] = useState(arr)

  return (
    <AppShell
      fixed
      header={<Header height={90} padding='md' signedin={{signedin: true, admin:true}} />}
    >
    <Ingredients />
    <Orders arr={arr}/>
    <GeneralButton event={() => setgoToMain(true)} name="Main"></GeneralButton>
    {goToMain? <Navigate to="/Main" replace={true} />: null}
    </AppShell>

  );
}



export default Admin;
