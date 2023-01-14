import { AppShell, Space, Stack, Group, Center, Card} from '@mantine/core';
import React from 'react';
import { Navigate } from 'react-router-dom';
import App from '../App';
import Header from '../components/Header';
import GeneralButton from '../components/Buttons';
import InputField from '../components/TextInput';

const LoginPage = (props: any) => {
    console.log(props.signedin)
    return (
        <div>
            {<AppShell
                fixed
                header={<Header height={90} padding='md' />}
            >
            <Center style={{height: 600}} inline={true}>
                <Card shadow = "lg" style={{height: 300}} withBorder>
                        <Stack align="center" spacing='xl'>
                            <InputField name={"Username"} password={0}/>
                            <InputField password={1}/>
                            <Group>
                                <GeneralButton event={props.setsignedin} name="Login"></GeneralButton>
                                <GeneralButton event={props.setsignedin} name="Guest"></GeneralButton>
                            </Group>
                        </Stack>
                    
                </Card>
            </Center>
                {(props.signedin? <Navigate to="/Main" replace={true} />: null)} 
            </AppShell>}
            
        </div>
        
    )
}

export default LoginPage;
