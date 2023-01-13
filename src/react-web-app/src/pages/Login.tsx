import { AppShell } from '@mantine/core';
import React from 'react';
import { Navigate } from 'react-router-dom';
import App from '../App';
import Header from '../components/Header';
import LoginButton from '../components/Buttons';
import InputField from '../components/TextInput';

const LoginPage = (props: any) => {
    console.log(props.signedin)
    return (
        <div>
            {<AppShell
                fixed
                header={<Header height={90} padding='md' />}
            >
                <br></br>
                <br></br>
                <br></br>
                <br></br>                
                <InputField name={"Username"} password={0}/>
                <br></br>
                <br></br>
                <br></br>
                <InputField password={1}/>
                <br></br>
                <br></br>
                <br></br>
                <LoginButton event={props.setsignedin}></LoginButton>

                {(props.signedin? <Navigate to="/Main" replace={true} />: null)} 
            </AppShell>}
            
        </div>
        
    )
}

export default LoginPage;
