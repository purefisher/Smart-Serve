import {
    Button,
    Card,
    Center,
    Container,
    createStyles,
    Grid,
    Group,
    Image,
    Modal,
    Text
  } from '@mantine/core';
  import { useState } from 'react';

  const styles = createStyles(({
    spacedHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100%',
    },
  
    blur: {
      background:  'rgba(255, 255, 255, 0.8)',
      boxShadow: '0 4px 40px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'saturate(180%) blur(10px)',
      webkitBackdropFilter: 'saturate(180%) blur(10px)',
    },
  }));
  
  function LoginButton(){
    return(
        <Center>
            <Button style={{width:150, height:50}} variant="outline" color='dark' compact>
                <Text
                size={23}
                weight={'bold'}>
                    Login
                </Text>
                
            </Button>
        </Center>

    );
  }


  export default LoginButton