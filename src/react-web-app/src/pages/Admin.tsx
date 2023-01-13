import { AppShell } from '@mantine/core';
import Header from '../components/Header';
import Ingredients from '../components/Ingredients';
import Orders from '../components/Orders';
import { createContext, useState } from 'react';

export const arrContext = createContext([
  "Hi",
  "Hello",
  "Bonjour"
]);

function Admin() {

  var arr = [
    "Hi",
    "Hello",
    "Bonjour"
  ];
  
  const [arr1, setArr] = useState(arr)

  return (
    <AppShell
      fixed
      header={<Header height={90} padding='md' />}
    >
    <Ingredients />
    <Orders arr={arr}/>
    </AppShell>
  );
}

export default Admin;
