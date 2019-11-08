import React from 'react';
import { Container, Header } from './styles';

const Content = () => {
    return (
        <Container>
            <Header>
                <h2>Uploads</h2>
                <button type="submit">New</button>
            </Header>
        </Container>
    )
}

export default Content;