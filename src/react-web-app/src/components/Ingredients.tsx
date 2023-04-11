import { Button, createStyles, Group, Select, Text, NumberInput, Modal, Center, Stack } from '@mantine/core';
import { useForm } from '@mantine/form';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useStyles = createStyles(() => ({
  container: {
    marginBottom: 100,
  },
}));


function HandelSubmit(ingredients:any){
  axios.post('ingredients', {ingredients:ingredients}, {headers: { 'Content-Type': 'application/json' }})
  .then((response) => {
    console.log('done')
  })
}

function Drinks(props:any) {
    const [opened, setOpened] = useState(false);
    const form = useForm({
        initialValues: {
          ing1: '',
          ing2: '',
          ing3: '',
          ing4: '',
          ing5: '',
          vol1: 1000,
          vol2: 1000,
          vol3: 1000,
          vol4: 1000,
          vol5: 1000,
          
          termsOfService: false,
        },
      });

      const options = ["whiskey", "orange juice", "lemon juice", "vodka", "tequila", "coke", "rum", "syrup", "club soda", "lemonade", "pineapple juice", "sprite", "gingerale", "grenadine"];
      const uniqueOptions = Array.from(new Set(options));
    
      const [selectedOptions, setSelectedOptions] = useState(
        new Array(5).fill('Select an option')
      );

      const handleSelect = (index: number, value: string) => {
        setSelectedOptions((prev) => {
          const newSelectedOptions = [...prev];
          newSelectedOptions[index] = value;
          return newSelectedOptions;
        });
        const ingredient = `ing${index + 1}` as keyof typeof form.values;
        form.setValues({ [ingredient]: value });
      };

      return (
        <>

          <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            withCloseButton={false}
            centered
          >
            Ingredients Updated
          </Modal>

          <Center>
          <form
              onSubmit={form.onSubmit((values) => {
                setOpened(true);
                HandelSubmit(values);
              })}
            >

          
              {selectedOptions.map((selectedOption, index) => {
                const otherSelectedOptions = selectedOptions.filter(
                  (option) => option !== selectedOption
                );
                const availableOptions = uniqueOptions.filter(
                  (option) => !otherSelectedOptions.includes(option)
                );

                return (
                  <Group spacing="xs">
              
                  <Stack>
                  <Text
                      sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                      ta="center"
                      fz="xl"
                      fw={700}
                    >
                    {`Dispensor ${index + 1}`}
                  </Text>
                  </Stack>
                  <Stack>
                  <Select
                    key={index}
                    label={`Ingredient ${index + 1}`}
                    placeholder={selectedOption}
                    data={availableOptions}
                    value={selectedOption}
                    onChange={(value) => value && handleSelect(index, value)}
                  />
                  </Stack>
                  <Stack>
                      <NumberInput
                          label={`Volume ${index + 1}`}
                          defaultValue={1000}
                         {...form.getInputProps(`vol${index + 1}`)}
                        hideControls
                          />
                  </Stack>
                  </Group>

                  
                );
              })}

            <Group position="right" mt="md">
              <Button type="submit">Confirm</Button>
            </Group>
          </form>
          </Center>
          </>
      );
}

export default Drinks;
