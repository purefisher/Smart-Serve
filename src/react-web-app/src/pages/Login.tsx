import { AppShell, Modal, Stack, Group, Center, Card, Text} from '@mantine/core';
import { Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Header from '../components/Header';
import GeneralButton from '../components/Buttons';
import InputField from '../components/TextInput';
import axios from 'axios';
import { useNavigate, useRoutes } from "react-router-dom";
import Logo from '../images/Logo.jpg';

    

const loginRequest = (setsignedin: any, username: string, password: string) => {
    axios.post('login', {username: username, password: password}, {headers: { 'Content-Type': 'application/json' }})
    .then((response) => {
        if(response.data.admin){
            setsignedin({signedin:true,
                        admin: true})
        }
        else if (response.data.login){
            setsignedin({signedin:true,
                admin: false})
        }
    })
}

const userRequest = (setsignedin: any, username: string, password: string) => {
    axios.post('user', {username: username, password: password}, {headers: { 'Content-Type': 'application/json' }})
    .then((response) => {
        if(response.data.admin){
            setsignedin({signedin:true,
                        admin: true})
        }
        setsignedin({signedin:true,
            admin: false})
    })
}

const LoginPage = (props: any) => {

    console.log(props.username)

    const [loginOpened, setLoginOpened] = useState(false);
    const [signupOpened, setSignupOpened] = useState(false);
    const navigate = useNavigate();
    
    return (
        <>
        <Modal
        opened={loginOpened}
        onClose={() => setLoginOpened(false)}
        withCloseButton={false}
        centered
        >
            
        Incorrect Login Credentials
        
        </Modal>
        
        <Modal
        opened={signupOpened}
        onClose={() => setSignupOpened(false)}
        withCloseButton={false}
        centered
        >
            
        Username Taken
        
        </Modal>

        <div>
            {<AppShell
                fixed
                header={<Header height={90} padding='md' signedin = {props.signedin} page='Login'/>}
            >
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                width: '100%',
                height: '33%',
                backgroundImage: `url(${Logo})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundSize: '10%'
              }}
            />
            <Center style={{height: 400}} inline={true}>
                <Stack>      
                <Text size={50} weight={'bold'}>
                Login Page
                </Text>
                <Card shadow = "lg" style={{height: 400}} withBorder>
                        <Stack align="center" spacing='xl'>
                            <InputField name={"Username"} password={0} setInput={props.setUsername}/>
                            <InputField password={1} setInput={props.setPassword}/>
                            <Group>
                                <GeneralButton event={() => {loginRequest(props.setsignedin, props.username, props.password); setLoginOpened(true)}} name="Login"></GeneralButton>
                                <GeneralButton event={() => props.setsignedin({signedin:true, admin:false})} name="Guest"></GeneralButton>
                            </Group>
                            <GeneralButton  event={()=>{navigate("/signup")}} name="Sign Up"></GeneralButton>
                        </Stack>
                    
                </Card>
                </Stack> 
            </Center>
                {(props.signedin.admin? <Navigate to="/Admin" replace={true} />: 
                                (props.signedin.signedin? <Navigate to="/Main" replace={true} />: null))} 
                {/* {(props.signedin? <Navigate to="/Main" replace={true} />: null)}  */}
            </AppShell>}
            
        </div>
        </>
    )
}

export default LoginPage;
