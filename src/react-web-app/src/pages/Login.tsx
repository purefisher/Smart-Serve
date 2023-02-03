import { AppShell, Space, Stack, Group, Center, Card} from '@mantine/core';
import React from 'react';
import { Navigate } from 'react-router-dom';
import App from '../App';
import Header from '../components/Header';
import GeneralButton from '../components/Buttons';
import InputField from '../components/TextInput';
import axios from 'axios';

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

    const [data, setData] = React.useState(null);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    
    return (
        <div>
            {<AppShell
                fixed
                header={<Header height={90} padding='md' signedin = {props.signedin}/>}
            >
            <Center style={{height: 600}} inline={true}>
                <Card shadow = "lg" style={{height: 400}} withBorder>
                        <Stack align="center" spacing='xl'>
                            <InputField name={"Username"} password={0} setInput={setUsername}/>
                            <InputField password={1} setInput={setPassword}/>
                            <Group>
                                <GeneralButton event={() => loginRequest(props.setsignedin, username, password)} name="Login"></GeneralButton>
                                <GeneralButton event={() => props.setsignedin({signedin:true, admin:false})} name="Guest"></GeneralButton>
                            </Group>
                            <GeneralButton event={() => userRequest(props.setsignedin, username, password)} name="Sign Up"></GeneralButton>
                        </Stack>
                    
                </Card>
            </Center>
                {(props.signedin.admin? <Navigate to="/Admin" replace={true} />: 
                                (props.signedin.signedin? <Navigate to="/Main" replace={true} />: null))} 
                {/* {(props.signedin? <Navigate to="/Main" replace={true} />: null)}  */}
            </AppShell>}
            
        </div>
        
    )
}

export default LoginPage;
