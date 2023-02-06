import { AppShell } from '@mantine/core';
import Header from '../components/Header';
import Ingredients from '../components/Ingredients';
import { createContext, useState } from 'react';
import React from "react"

function Admin(props: any) {

  const [goToMain, setgoToMain] = React.useState(false);

  return (
    <AppShell
      fixed
      header={<Header height={90} padding='md' signedin={{signedin: true, admin:true}} page='admin' />}
    >
    <Ingredients />
    </AppShell>

  );
}



export default Admin;
