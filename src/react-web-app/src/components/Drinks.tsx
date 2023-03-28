import {  Button, Card, Container, createStyles, Grid, Group, Image, Modal, Text, Title } from '@mantine/core';
import info from '../database/data';
import CategoryTitle from './CategoryTitle';
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { setSourceMapRange } from 'typescript';
import axios from 'axios';


const useStyles = createStyles((theme) => ({
  
  button: {
    '&:hover': {
      top: -5,
    },
    cursor: 'pointer',
    borderWidth: 2,
    boxShadow: '0 4px 40px rgba(0, 0, 0, 0.1)',
  },

  card: {
    backgroundColor: theme.colors.gray[0],
    transition: 'top ease 0.2s',
    position: 'relative',
    top: 0,
    cursor: 'context-menu',
    '&:hover': {
      top: -2,
    },
    borderWidth: 2,
    boxShadow: '0 4px 40px rgba(0, 0, 0, 0.1)',
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
    {/* {console.log(drinkAvaiable)} */}
        <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        centered
    >
      Order Confirmed
      
    </Modal>
    
    <Container>   
      
      {info.map(({ category, drinks }) => ( 
        <>
          <div id={category}>
            
            <CategoryTitle>{category}</CategoryTitle>
          </div>
          <Grid>
            {drinks.map((drink)=> {
              if(drinkAvaiable.includes(drink.name)){
		// console.log(drinkAvaiable)
                return(
                  <Grid.Col xl={5}>
                  <div>
                    <Card shadow="sm" radius="md" className={classes.card} withBorder>
                    <Card.Section>
                      <Image
                        src={drink.image}
                        height={220}
                        alt={drink.name}
                      />
                    </Card.Section>


                      <Text weight={200} size={40}>
                        {drink.name}
                      </Text>
                      <Container p={0}>
                        <Text mt={20} size='md'>
                          {'Ingredients:'}
                        </Text>
                        
                        <Text   size='sm'>
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
                        <Button className={classes.button} variant="light" color="blue" fullWidth mt="md" radius="md"
                          onClick={() => {setOpened(true); addDrink(drink.name); orderedDrink(drink, props.username)}}
                        >
                          Order Now
                        </Button>
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
