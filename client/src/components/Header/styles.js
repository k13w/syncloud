import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 4vw;
    background-color: #0E1428;
    border-bottom: 1px solid green;
    justify-content: space-between;
    img {
        width: 70px;
        height: 60px;
    }
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    img {
        width: 70px;
        height: 60px;
        margin-left: 20px;
    }
    h1 {
        color: #FFFFFF;
        margin-left: 20px;
    }
`;

export const BoxUser = styled.div`
    display: flex;
    background-color: #0E1428;
    align-items: center;
    cursor: pointer;
    h4 {
        color: #FFFFFF;
        margin-right: 15px;
    }
    img {
        width: 70px;
        height: 60px;
        margin-right: 30px;
        border-radius: 50%;
    }
`;