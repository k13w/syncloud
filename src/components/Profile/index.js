import React from 'react';
import { Container, Panel, BoxUser } from './styles';

const Sidenav = () => {
    return (
        <Container>
            <Panel>
                <h4>Logout</h4>
                <img src="imgs/logout.svg" alt="Logout." />
            </Panel>

            <BoxUser>
                <img src="https://avatars0.githubusercontent.com/u/13907472?s=460&v=4" alt="Meu logo" />
                <h2>Gilmar Silva</h2>
            </BoxUser>
        </Container>
    )
}

export default Sidenav;