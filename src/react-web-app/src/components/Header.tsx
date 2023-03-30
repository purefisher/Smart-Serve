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

import { useNavigate, useRoutes } from "react-router-dom";

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
  page: string;
};

function Header({ ...hP }: HeaderProps) {
  const { classes } = styles();
  const navigate = useNavigate();

  function handleHeading() {
    navigate("/");
  }

  function handleButton(page:string) {
    {(page=='Main'? navigate("/admin"): navigate("/main"))}
  }

  function handleQButton(page:string){
    {(page=='Main'? navigate("/queue"): (page=='admin'?navigate("/queue"): navigate("/main")))}
  }

  return (
    <HD className={classes.blur} {...hP}>
      <Container className={classes.spacing} fluid>
        
        <Center style={{ width: '100%', height: 200, paddingLeft: 100 }}>
          <Group position="center">
            <Text size={50} weight={'bold'} onClick={handleHeading}>
              SMART - SERVE
            </Text>
          </Group>
        </Center>
        {hP.page=='Login'?null
        :<Group position="right">
        <Button variant="outline" color='dark' onClick={()=>{handleQButton(hP.page)}}>
        {(hP.page=='queue'? <text>MAIN PAGE</text>: <text>QUEUE PAGE</text>)}
        </Button>
        {hP.signedin.admin?
          <Button variant="outline" color='dark' onClick={()=>{handleButton(hP.page)}}>
          {(hP.page=='Main'? <text>ADMIN PAGE</text>: <text>MAIN PAGE</text>)}
          </Button>
        : null}
        </Group>}

      </Container>
    </HD>
  );
}

export default Header;
