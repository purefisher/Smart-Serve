import {  Card, Container, createStyles, Grid, Group, Image, Modal, Text, Title } from '@mantine/core';
import info from '../database/data';
import CategoryTitle from './CategoryTitle';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { setSourceMapRange } from 'typescript';
import axios from 'axios';


const useStyles = createStyles((theme) => ({
  
  container: {
    marginBottom: 100,
  },
  card: {
    backgroundColor: theme.colors.gray[0],
    transition: 'top ease 0.2s',
    position: 'relative',
    top: 0,
    '&:hover': {
      top: -5,
    },
    cursor: 'pointer',
    borderWidth: 2,
    boxShadow: '0 4px 40px rgba(0, 0, 0, 0.1)',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  footer: {
    padding: `${theme.spacing.xs}px ${theme.spacing.lg}px`,
    marginTop: theme.spacing.md,
    borderTop: `1px solid ${theme.colors.gray[2]}`,
  },
}));

function Drinks(props:any) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);
  var [arr, setArr] = useState([""]);
  const [firstRequestSent, setfirstRequestSent] = React.useState(false)
  const [drinkAvaiable, setdrinkAvaiable] = React.useState(['']);

  
  function addDrink(drink: string){
    arr.push(drink);
    setArr([...arr]);
    localStorage.setItem("arr", JSON.stringify(arr));
  }

  const orderedDrink = (drink: any, username:string) => {
    axios.post('order', {drink:drink, username:props.username}, {headers: { 'Content-Type': 'application/json' }})
    .then((response) => {
        console.log('Drink Ordered')
    })
}

function checkAvailability (drink: any){

    axios.post('check', {drink:drink}, {headers: { 'Content-Type': 'application/json' }})
    .then((response) => {
      if(response.data.availability){
        drinkAvaiable.push(drink.name);
        setdrinkAvaiable([...drinkAvaiable]);
        localStorage.setItem("arr", JSON.stringify(drink.name));
      }
      else{
        setdrinkAvaiable(drinkAvaiable)
      }
    })
  
}

if(!firstRequestSent){
  info.forEach(category => category.drinks.forEach(drink=>checkAvailability(drink)))
  setfirstRequestSent(true)
}
  return (
    <>
    {console.log(drinkAvaiable)}
        <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        centered
    >
      Order Confirmed
      
    </Modal>
    
    <Container className={classes.container}>   
      
      {info.map(({ category, drinks }) => ( 
        <>
          <div id={category}>
            
            <CategoryTitle>{category}</CategoryTitle>
          </div>
          <Grid>
            {drinks.map((drink)=> {
              if(drinkAvaiable.includes(drink.name)){
                return(
                  <Grid.Col xs={12} sm={6} lg={6} xl={4}>
                  <div onClick={() => {setOpened(true); addDrink(drink.name); orderedDrink(drink, props.username)}}>
                    <Card withBorder p='lg' radius='md' className={classes.card}>
                      <Card.Section mb='md'>
                        <Image src={drink.image} alt={drink.name} height={200} />
                      </Card.Section>
                      <Text weight={200} size={40} className={classes.title}>
                        {drink.name}
                      </Text>
                      <Container p={0}>
                        <Text lineClamp={2} mt={20} size='sm'>
                          {'Ingredients:'}
                        </Text>
                        
                        <Text lineClamp={2} mt={20} size='sm'>
                            {drink.ingredients.IG1.name}
                        </Text>
                        <Text lineClamp={2} size='sm'>
                            {drink.ingredients.IG2.name}
                        </Text>
                        <Text lineClamp={2}  size='sm'>
                            {drink.ingredients.IG3.name}
                        </Text>
                        <Text lineClamp={2}  size='sm'>
                            {drink.ingredients.IG4.name}
                        </Text>
                        



                      </Container>
                      <Card.Section className={classes.footer}>
                        <Group position='apart'>
                          <Text size='xl' weight={900}>
                            ORDER NOW
                          </Text>
                        </Group>
                      </Card.Section>
                    </Card>
                  </div>
                </Grid.Col>

                )
              }
            })}
          </Grid>
        </>
      ))}
    </Container>
    </>
    
  
  );
}

export default Drinks;
