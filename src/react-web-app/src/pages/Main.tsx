import { AppShell } from '@mantine/core';
import Header from '../components/Header';
import Drinks from '../components/Drinks';

function Main(props: any) {
  return (
    <AppShell
      fixed
      header={<Header height={90} padding='md' signedin={props.signedin} page='Main'/>}
    >
      <Drinks username={props.username} setUsername={props.setUsername}/>
    </AppShell>
  );
}

export default Main;
