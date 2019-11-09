import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import api from '../../../services/api';
import login from '../../../services/auth';
import { Container, Header, Panel, FormLogin } from './styles';

import { singInRequest } from '../../../store/modules/auth/actions';

function RightBox() {
    const dispatch = useDispatch();

    const handleSingIn = ({ email, password }) => {

        dispatch(singInRequest(email, password))
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
                        name="email"
                        type="email" 
                        name="email" 
                        placeholder="E-mail" 
                    /><br />
                    <Input 
                        name="password"
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                    />
                    <h6>Forgot Password?</h6>
                    <button type="submit">Login</button>
                </Form>
            </Panel>
        </Container>
    )
}

export default RightBox;