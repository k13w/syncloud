import React from 'react';
import LeftBox from '../common/Leftbox';
import RightBox from '../common/Rightbox';
import { Container } from './styles';

function Panel() {

    return (
        <>
            <Container>
                <LeftBox />
                <RightBox />
            </Container>
        </>
    )

}

export default Panel;