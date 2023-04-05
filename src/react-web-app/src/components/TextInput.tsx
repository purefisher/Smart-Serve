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
    Input,
    PasswordInput
  } from '@mantine/core';

function InputField(props: any){
    return(
        <Center>
            {props.password ? 
                <PasswordInput
                placeholder="Password"
                label="Password"
                size='lg'
                style={{width: 500}}
                onChange = {(event) => props.setInput(event.target.value)}    
              />
            :<Input.Wrapper label={props.name} size='lg'>
            <Input
                placeholder={props.name}
                size="lg"
                style={{width: 500}}
                onChange = {(event) => props.setInput(event.target.value)}
                />
            </Input.Wrapper>
            }
        </Center>

    );
}


export default InputField