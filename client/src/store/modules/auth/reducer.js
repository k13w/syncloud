import produce from 'immer';

const INITIAL_STATE = {
    token: null,
    signed: false
}

export default function auth(state = INITIAL_STATE, action) {

    return produce(state, draft => {
    switch (action.type) {
        case '@auth/SING_IN_REQUEST': {
            break;
        }
        case '@auth/SING_IN_SUCCESS': {
            draft.profile = action.payload.user;
            draft.token = action.payload.token
            draft.signed = true;
            break;
        }
        case '@auth/SING_FAILURE': {
            break;
        }
        case '@auth/SING_OUT': {
            draft.token = null;
            draft.signed = false;
            break;
        }
        default:
        }
    });
}