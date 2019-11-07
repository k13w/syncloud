import styled from 'styled-components';

export const Container = styled.div`
    width: 20vw;
    height: 100vh;
    background-color: #FFFFFF;
`;

export const Panel = styled.div`
    display: flex;
    flex-direction: row;
    margin: 30px;
    justify-content: space-between;
    align-items: center;
    margin-top: 100px;
    img {
        width: 35px;
    }
`;

export const BoxUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
    img {
        width: 200px;
        border-radius: 50%;
    }
    h2 {
        margin-top: 30px;
    }
`;