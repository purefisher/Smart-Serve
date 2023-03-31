import { AppShell, Modal, Stack, Group, Center, Card, Select, NumberInput, Text} from '@mantine/core';
import { Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Header from '../components/Header';
import GeneralButton from '../components/Buttons';
import InputField from '../components/TextInput';
import axios from 'axios';


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

const SignUp = (props: any) => {

    console.log(props.username)

    const [loginOpened, setLoginOpened] = useState(false);
    const [signupOpened, setSignupOpened] = useState(false);
    
    return (
        <>
        
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
            <Center style={{height: 600}} inline={true}>                    
                <Stack>                  
                    <Text size={50} weight={'bold'}>
                    Sign Up Page
                    </Text>
                <Card shadow = "lg" style={{height: 400}} withBorder>
                        <Stack align="center" spacing='xl'>
                            <InputField name={"Username"} password={0} setInput={props.setUsername}/>
                            <InputField password={1} setInput={props.setPassword}/>
                            <Group>
                            <Stack>
                            <Select
                                label="Gender"
                                placeholder="Gender"
                                data={["male", "female", "other"]}
                            />
                            </Stack>
                            <Stack>
                                <NumberInput
                                    label="Age"
                                    placeholder="Age"
                                    min={19}
                                    />
                            </Stack>
                            </Group>
                            <GeneralButton event={() => {userRequest(props.setsignedin, props.username, props.password); setSignupOpened(true)}} name="Sign Up"></GeneralButton>
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

export default SignUp;
