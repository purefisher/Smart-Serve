import {
  Button,
  Center,
  Container,
  createStyles,
  Group,
  Header as HD,
  MantineNumberSize,
  Text,
} from '@mantine/core';

import { useNavigate } from "react-router-dom";

const styles = createStyles(({
  spacing: {
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
  signedin: any;
};

function Header({ ...hP }: HeaderProps) {
  const { classes } = styles();
  const navigate = useNavigate();

  function handleHeading() {
    navigate("/");
  }

  function handleButton() {
    navigate("/admin");
  }

  return (
    <HD className={classes.blur} {...hP}>
      <Container className={classes.spacing} fluid>
        
        <Center style={{ width: 1500, height: 200 }}>
        <Group position="center">
          <Text size={50} weight={'bold'} onClick={handleHeading}>
            SMART - SERVE
          </Text>
        </Group>
        </Center>
        {hP.signedin.admin?
        <Group position="right">
          <Button onClick={handleButton}>
            ADMIN PAGE
          </Button>
        </Group>
        : null}
      </Container>
    </HD>
  );
}

export default Header;
