import { AppShell, Modal} from '@mantine/core';
import Header from '../components/Header';
import Drinks from '../components/Drinks';
import axios from 'axios';
import { response } from 'express';
import React from "react"

function Main(props: any) {
  const [opened, setOpened] = React.useState(false);
  const interval = setInterval(() => {
    axios.post('placement', {username:props.username}, {headers: { 'Content-Type': 'application/json' }})
    .then((response)=>{
      if(response.data == 'Second'){
        setOpened(true)
      }
    })
}, 3000);

  return (
    <>
    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        centered
    >
      You are now second in the queue. Please get your cup ready.
    </Modal>


    <AppShell
      fixed
      header={<Header height={90} padding='md' signedin={props.signedin} page='Main'/>}
    >
      <Drinks username={props.username} setUsername={props.setUsername}/>
    </AppShell>
  </>
  );
}

export default Main;
