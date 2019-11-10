import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { Container, Header, Panel } from './styles';

import { singUpRequest } from '../../../store/modules/auth/actions';

function SingUp() {
    const dispatch = useDispatch();

    const handleSingIn = ({ name, email, password }) => {

        dispatch(singUpRequest(name, email, password))
    }

    return (
        <Container>
            <Header>
                <h1>Syncloud</h1>
                <h4>Guarde e compartilhe seus arquivos com segurança</h4>
            </Header>
            <Panel>
                <Form onSubmit={handleSingIn}>
                    <Input 
                        name="name"
                        type="text" 
                        placeholder="Name" 
                    /><br />
                    <Input 
                        name="email"
                        type="email" 
                        placeholder="E-mail" 
                    /><br />
                    <Input 
                        name="password"
                        type="password" 
                        placeholder="Password" 
                    />
                    <button type="submit">Sing Up</button>
                </Form>
            </Panel>
        </Container>
    )
}

export default SingUp;