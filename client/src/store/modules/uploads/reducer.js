import produce from 'immer';

const INITIAL_STATE = {
    uploads: [],
}

export default function upload(state = INITIAL_STATE, action) {

    return produce(state, draft => {
    switch (action.type) {
        case '@files/UPLOAD_REQUEST': {
            break;
        }
        case '@files/UPLOAD_SUCCESS': {
            draft.uploads = action.payload.files;
            break;
        }
        case '@files/UPLOAD_FAILURE': {
            break;
        }
        default:
        }
    });
}