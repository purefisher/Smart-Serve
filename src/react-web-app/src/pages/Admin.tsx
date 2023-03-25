import { AppShell, Card } from '@mantine/core';
import Header from '../components/Header';
import Ingredients from '../components/Ingredients';
import { createContext, useState } from 'react';
import React from "react"
import BarChart from '../components/BarChart';
import axios from 'axios';
import PieChart from '../components/PieChart';


function Admin(props: any) {
  const [data, setData] = React.useState([]);
  const [goToMain, setgoToMain] = React.useState(false);
  React.useEffect(() => {
  axios.post('drinkPopularity', {headers: { 'Content-Type': 'application/json' }})
    .then(response => {
      const transformedData = response.data.map((item: { drink: string, Amount: number }) => ({
        x: item.drink,
        y: item.Amount
      }));
      setData(transformedData);
    })
    .catch(error => {
      console.error(error);
    });
    }, []);
  console.log(data)
  
  return (
    <AppShell
      fixed
      header={<Header height={90} padding='md' signedin={{signedin: true, admin:true}} page='admin' />}
    >
    <Ingredients />
    <BarChart series={{ data: data }}/>
    <PieChart series={{data: data}}/>
    </AppShell>

  );
}



export default Admin;
