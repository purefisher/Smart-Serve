import { AppShell, Modal} from '@mantine/core';
import Header from '../components/Header';
import Drinks from '../components/Drinks';
import axios from 'axios';
import { response } from 'express';
import React, { useState, useEffect } from 'react';
import Queue from './Queue';
import {io} from 'socket.io-client';

const socket = io('http://192.168.2.203:8080')

function Main(props: any) {
  const [opened, setOpened] = React.useState(false);

useEffect(() => {
  
  socket.connect()
  socket.emit('Request-Data')
  socket.on('secondQueue', (data: any[]) => {
    console.log("Second Person in Line -> ", data)
    if(data == props.username){
      setOpened(true)
    }
    else{
      setOpened(false)
    }
  });
  

}, []);

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
