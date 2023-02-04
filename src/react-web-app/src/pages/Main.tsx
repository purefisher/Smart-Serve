import { AppShell } from '@mantine/core';
import Header from '../components/Header';
import Drinks from '../components/Drinks';

function Main(props: any) {
  console.log(props.ingredients)
  return (
    <AppShell
      fixed
      header={<Header height={90} padding='md' signedin={props.signedin}/>}
    >
      <Drinks />
    </AppShell>
  );
}

export default Main;
