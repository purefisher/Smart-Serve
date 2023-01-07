import {
  Center,
  Container,
  createStyles,
  Group,
  Header as HD,
  MantineNumberSize,
  Text,
} from '@mantine/core';

const styles = createStyles(({
  spacedHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  blur: {
    background:  'rgba(255, 255, 255, 0.8)',
    boxShadow: '0 4px 40px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'saturate(180%) blur(10px)',
    webkitBackdropFilter: 'saturate(180%) blur(10px)',
  },
}));

type HeaderProps = {
  height: number;
  padding: MantineNumberSize;
};

function Header({ ...hP }: HeaderProps) {
  const { classes } = styles();

  return (
    <HD className={classes.blur} {...hP}>
      <Container className={classes.spacedHeader} fluid>
        
        <Center style={{ width: 1500, height: 200 }}>
        <Group spacing='xs'>
          <Text
            size={50}
            weight={'bold'}
          >
            SMART - SERVE
          </Text>
        </Group>
        </Center>
      </Container>
    </HD>
  );
}

export default Header;
