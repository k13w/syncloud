import React from 'react';
import Sidenav from '../../components/Sidenav';
import Content from '../../components/Content';
import Profile from '../../components/Profile';
import { Container } from './styles';

const Dashboard = () => {
    return (
        <Container>
            <Sidenav />
            <Content />
            <Profile />
        </Container>
    )
}

export default Dashboard;