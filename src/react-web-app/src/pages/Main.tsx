import { AppShell } from '@mantine/core';
import Header from '../components/Header';
import Drinks from '../components/Drinks';

function Main() {

  return (
    <AppShell
      fixed
      header={<Header height={90} padding='md' />}
    >
      <Drinks />
    </AppShell>
  );
}

export default Main;
