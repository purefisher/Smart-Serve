import { Button, createStyles, Group, Select, Text, NumberInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import axios from 'axios';
import ings from '../database/ings';

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

function Drinks() {
    const form = useForm({
        initialValues: {
          ing1: '',
          ing2: '',
          ing3: '',
          vol1: '',
          vol2: '',
          vol3: '',
          
          termsOfService: false,
        },
      });

      return (
          <form onSubmit={form.onSubmit((values) => HandelSubmit(values))}>
            
            <Group spacing="xs">
            <Text
                sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                ta="center"
                fz="xl"
                fw={700}
              >
              Dispensor 1
            </Text>
            <Select
                label="Ingredients"
                placeholder="Ingredient 1"
                data={ings}
                {...form.getInputProps('ing1')}
                />
                <NumberInput
                    defaultValue={1000}
                    label="Volume"
                    placeholder="Volume 1"
                    {...form.getInputProps('vol1')}
                  hideControls
                    />
            </Group>
            <Group spacing="xs">
            <Text
                sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                ta="center"
                fz="xl"
                fw={700}
              >
              Dispensor 2
            </Text>
            <Select
                label=""
                placeholder="Ingredient 2"
                data={ings}
                {...form.getInputProps('ing2')}
                />
                <NumberInput
                    label=""
                    defaultValue={1000}
                    placeholder="Volume 2"
                    {...form.getInputProps('vol2')}
                    hideControls
                    />
            </Group>
            <Group spacing="xs">
            <Text
                sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                ta="center"
                fz="xl"
                fw={700}
                
              >
              Dispensor 3
            </Text>
            
            <Select
                label=""
                placeholder="Ingredient 3"
                data={ings}
                {...form.getInputProps('ing3')}
                
                />
                
                <NumberInput
                    label=""
                    defaultValue = {1000}
                    placeholder="Volume 3"
                    {...form.getInputProps('vol3')}
                    hideControls
                    />
            </Group>

            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
      );
}

export default Drinks;
