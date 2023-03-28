import { AppShell, Card, createStyles, Text, Group } from '@mantine/core';
import Header from '../components/Header';
import axios from 'axios'
import React, { useState, useEffect } from 'react';

// const users = [
//     {
//       id: 1,
//       name: 'John Doe',
//       drink: 'Vodka Sode',
//     },
//     {
//       id: 2,
//       name: 'Jane Doe',
//       drink: 'Gin and Tonic',
//     },
//     {
//       id: 3,
//       name: 'Bob Smith',
//       drink: 'Moscow Muel',
//     },
//   ];
  


  const useStyles = createStyles((theme) => ({
    card: {
        backgroundColor: theme.colors.gray[0],
        position: 'relative',
        top: 0,
        borderWidth: 2,
        boxShadow: '0 4px 40px rgba(0, 0, 0, 0.1)',
        width: '70%',
        maxWidth: 600,
        minHeight:400,
        height: 'auto',
        borderRadius: theme.radius.lg,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: -500,
        overflowY: 'auto'
      },
  }));


  
function Queue(props:any){
    const [users, setUsers] = React.useState<{ drinkName: string, username: string }[]>([]);
    const { classes } = useStyles();

    const opened = async () => {
        const response = await axios.post('queue', {}, { headers: { 'Content-Type': 'application/json' }});
        const orderedJSON: { drinkName: string, username: string }[] = response.data.map((item: { drink: { name: string }, username: string }) => {
          return { 
            drinkName: item.drink.name, 
            username: item.username 
          };
        });
        return orderedJSON;
      };
      
      useEffect(() => {
        const interval = setInterval(() => {
          opened().then(result => {
            setUsers(result);
            console.log(result);
          });
        }, 1000);
        return () => clearInterval(interval);
      }, []);

    return(
        
        <AppShell
            fixed
            header={<Header height={90} padding='md' signedin={props.signedin} page='queue'/>}
            >
            <Text style={{marginTop:75, fontWeight:500, fontSize:32}}>The Queue</Text>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Card className={classes.card} shadow="sm">
                <Card.Section>
                        <Group style={{marginBottom: 20}}>
                            <Text size={28} weight={500} style={{width:150, textAlign: 'center', marginLeft:95}}> 
                                Name
                            </Text>
                            <Text size={28} weight={500} style={{width:150, textAlign: 'center', marginLeft:65}}> 
                                Drink
                            </Text>      
                        </Group>
                    {users.map((user, index) => (
                    <div key={user.username} style={{ marginBottom: 20 }}>
                        <Group position='left'>
                        <Text size={24} weight={500} style={{width:100, textAlign: 'left'}}>
                        {index + 1}.  
                        </Text>
                        <Text size={24} weight={500} style={{width:200, textAlign: 'left'}}>
                            {user.username}
                        </Text>
                        <Text size={24} weight={500} style={{width:200, textAlign: 'left'}}>
                            {user.drinkName}
                        </Text>
                        </Group>
                        
                    </div>
                    ))}
                </Card.Section>
            </Card>
            </div>
        </AppShell>
        
    );
}

export default Queue