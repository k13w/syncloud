import React from 'react';
import Sidenav from '../../components/Sidenav';
import Content from '../../components/Content';
import { Container } from './styles';
import Header from '../../components/Header';

const Dashboard = () => {
    return (
        <>
        <Header />
        <Container>
            <Sidenav />
            <Content />
        </Container>
        </>
    )
}

export default Dashboard;