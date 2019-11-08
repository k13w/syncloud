import React from 'react';
import LeftBox from '../../components/common/Leftbox';
import RightBox from '../../components/common/Rightbox';
import { Container } from './styles';

const Main = () => {
    return (
        <Container>
            <LeftBox />
            <RightBox />
        </Container>
    )
}

export default Main;