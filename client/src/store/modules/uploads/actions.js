export function uploadRequest(files) {
    return {
        type: '@files/UPLOAD_REQUEST',
        payload: { files }
    }
}

export function uploadSuccess(files) {
    return {
        type: '@files/UPLOAD_SUCCESS',
        payload: { files }
    };
}

export function uploadFailure(files) {
    return {
        type: '@files/UPLOAD_FAILURE',
        payload: { files }
    };
}