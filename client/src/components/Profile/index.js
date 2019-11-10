import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { singOut } from '../../store/modules/auth/actions';
import { Container, Panel, BoxUser, BoxInfoCloud } from './styles';

const Profile = () => {

    const dispatch = useDispatch();
    const profile = useSelector(state => state.user.profile);

    function handleSingOut() {
        dispatch(singOut());
    }

    return (
        <Container>
            <Panel>
                <h4>Logout</h4>
                <img onClick={handleSingOut} src="imgs/logout.svg" alt="Logout." />
            </Panel>

            <BoxUser>
                <img src="https://avatars0.githubusercontent.com/u/13907472?s=460&v=4" alt="Meu logo" />
                <h2>{profile.name}</h2>
                <BoxInfoCloud>
                    <img src="imgs/upload.svg" alt="upload file" />
                    <h4>110 Uploads</h4>
                </BoxInfoCloud>
            </BoxUser>
        </Container>
    )
}

export default Profile;