import { Button, createStyles, Group, Select, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import ings from '../database/ings';

const useStyles = createStyles(() => ({
  container: {
    marginBottom: 100,
  },
}));


function Drinks() {
    const form = useForm({
        initialValues: {
          ing1: '',
          ing2: '',
          d1: '',
          d2: '',
          termsOfService: false,
        },
      });

      return (
          <form onSubmit={form.onSubmit((values) => console.log(values))}>
            
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
                
                />
            </Group>

            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
      );
}

export default Drinks;
