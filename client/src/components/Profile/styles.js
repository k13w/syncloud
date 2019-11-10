import styled from 'styled-components';

export const Container = styled.div`
    width: 17vw;
    height: 92vh;
    background-color: #0E1428;
    box-shadow: 5px 5px 5px 5px #01DF74;
`;

export const Panel = styled.div`
    display: flex;
    flex-direction: row;
    margin: 50px;
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
    img:first-child {
        width: 200px;
        border-radius: 50%;
    }
    h2 {
        margin-top: 30px;
        color: #fff;
    }
`;

export const BoxInfoCloud = styled.div`
    display: flex;
    flex-direction: row;
    margin: 40px;
    align-items: center;
    img {
        height: 50px;
    }
    h4 {
        color: black;
    }
`;