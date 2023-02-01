import { AppShell } from '@mantine/core';
import Header from '../components/Header';
import Ingredients from '../components/Ingredients';
import Orders from '../components/Orders';

function Admin() {

  return (
    <AppShell
      fixed
      header={<Header height={90} padding='md' />}
    >
    <Ingredients />
    </AppShell>
  );
}

export default Admin;
