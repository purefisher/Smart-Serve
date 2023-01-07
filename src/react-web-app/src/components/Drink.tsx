import {
  Card,
  Container,
  createStyles,
  Grid,
  Group,
  Image,
  Modal,
  Text,
} from '@mantine/core';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
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

interface DrP {
  image: string;
  category: string;
  title: string;
}

function Drink({
  image,
  title,
}: DrP) {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <>
    <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
        centered
    >
      Order Confirmed
    </Modal>



    <Grid.Col xs={12} sm={6} lg={6} xl={4}>
      <div onClick={() => setOpened(true)}>
        <Card withBorder p='lg' radius='md' className={classes.card}>
          <Card.Section mb='sm'>
            <Image src={image} alt={title} height={200} />
          </Card.Section>
          <Text weight={200} size={40} className={classes.title}>
            {title}
          </Text>
          <Container p={0}>
            <Text lineClamp={2} mt={20} size='sm'>
              {'Ingredients:'}
            </Text>
            <Text c='dimmed' size='sm'>
              {'Tequila'}
            </Text>
            <Text c='dimmed' size='sm'>
              {'Oyster Juice'}
            </Text>
            <Text c='dimmed' size='sm'>
              {'Applesauce'}
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

    </>
  );
}

export default Drink;
