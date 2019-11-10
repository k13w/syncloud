import React from 'react';
import { Form } from '@rocketseat/unform';
import { Container } from './styles';

const Profile = () => {

    return (
        <Container>
            <Form>
                <input name="name" type="text" placeholder="Seu nome" />
                <input name="email" type="email" placeholder="Seu email" />
                <input name="password" type="password" placeholder="Seu password" />
            </Form>
        </Container>
    )
}

export default Profile;