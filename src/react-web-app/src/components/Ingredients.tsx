import { Button, createStyles, Group, Select, Text } from '@mantine/core';
import { useForm } from '@mantine/form';
import ings from '../database/ings';
import disps from '../database/disps';

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
                
            <Select
                label="Ingredients"
                placeholder="Ingredient 1"
                data={ings}
                />
            <Select
                label="Dispensors"
                placeholder="Dispensor 1"
                data={disps}
            />
            </Group>
            <Group spacing="xs">
                
            <Select
                label=""
                placeholder="Ingredient 2"
                data={ings}
                />
            <Select
                label=""
                placeholder="Dispensor 2"
                data={disps}
            />
            </Group>
            <Group spacing="xs">
            
            <Select
                label=""
                placeholder="Ingredient 3"
                data={ings}
                />
            <Select
                label=""
                placeholder="Dispensor 3"
                data={disps}
            />
            </Group>

            <Group position="right" mt="md">
              <Button type="submit">Submit</Button>
            </Group>
          </form>
      );
}

export default Drinks;
