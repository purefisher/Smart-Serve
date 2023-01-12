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
                label=""
                placeholder="Pick one"
                data={ings}
                />
            <Select
                label=""
                placeholder="Pick one"
                data={disps}
            />
            </Group>
            <Group spacing="xs">
                
            <Select
                label=""
                placeholder="Pick one"
                data={ings}
                />
            <Select
                label=""
                placeholder="Pick one"
                data={disps}
            />
            </Group>
            <Group spacing="xs">
                
                <Select
                    label=""
                    placeholder="Pick one"
                    data={ings}
                    />
                <Select
                    label=""
                    placeholder="Pick one"
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
