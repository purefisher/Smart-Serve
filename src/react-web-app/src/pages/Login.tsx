import { AppShell } from '@mantine/core';
import React from 'react';
import { Navigate } from 'react-router-dom';
import App from '../App';
import Header from '../components/Header';
import LoginButton from '../components/Buttons';
import UsernameInputField from '../components/TextInput';
import PasswordInputField from '../components/TextInput';

const LoginPage = (props: any) => {
    return (

        <div>
            {<AppShell
                fixed
                header={<Header height={90} padding='md' />}
            >
                <br></br>
                <br></br>
                <UsernameInputField/>
                <br></br>
                <br></br>
                <br></br>
                <PasswordInputField/>
                <br></br>
                <br></br>
                <br></br>
                <LoginButton/>
                {(props.signedin? <Navigate to="/Main" replace={true} />: null)} 
            </AppShell>}
            
        </div>
        
    )
}

export default LoginPage;
