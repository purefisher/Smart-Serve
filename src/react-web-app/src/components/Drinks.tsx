import { Container, createStyles, Grid } from '@mantine/core';
import info from '../database/data';
import CategoryTitle from './CategoryTitle';
import Drink from './Drink';

const useStyles = createStyles(() => ({
  container: {
    marginBottom: 100,
  },
}));


function Drinks() {
  const { classes } = useStyles();

  return (
    <Container className={classes.container}>
      {info.map(({ category, drinks }) => (
        <>
          <div id={category}>
            <CategoryTitle>{category}</CategoryTitle>
          </div>
          <Grid>
            {drinks.map((drink) => (
              <Drink
                key={drink.name}
                image={drink.image}
                category={category}
                title={drink.name}
              />
            ))}
          </Grid>
        </>
      ))}
    </Container>
  );
}

export default Drinks;
