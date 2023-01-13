import {
    Button,
    Card,
    Center,
    Container,
    createStyles,
    Grid,
    Group,
    Image,
    Modal,
    Text,
    Input
  } from '@mantine/core';

function UsernameInputField(){
    return(
        <Center>
                <Input
                placeholder="Username"
                size="lg"
                />
        </Center>

    );
}

function PasswordInputField(){
    return(
        <Center>
                <Input
                placeholder="Password"
                size="lg"
                />
        </Center>

    );
}

export default UsernameInputField