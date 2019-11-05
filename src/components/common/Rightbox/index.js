import React from 'react';
import { Container, Header, Panel, FormLogin } from './styles';

function RightBox() {


    return (
        <Container>
            <Header>
                <h1>Syncloud</h1>
                <h4>Guarde e compartilhe seus arquivos com segurança</h4>
            </Header>
            <Panel>
                <FormLogin>
                    <input type="email" name="email" placeholder="E-mail" /><br />
                    <input type="password" name="password" placeholder="Password" />
                    <h6>Forgot Password?</h6>
                    <button>Login</button>
                </FormLogin>
            </Panel>
        </Container>
    )
}

export default RightBox;