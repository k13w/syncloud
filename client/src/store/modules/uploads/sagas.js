import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';

import { uploadSuccess } from './actions';

function* uploadFile({ payload }) {

    const { files } = payload;

    const data = new FormData();

    files.forEach(file => {
        data.append('file', file);
    });

    const res = yield call(api.post, '/files', data); 

    yield put(uploadSuccess(res.data));


}

export default all([
    takeLatest('@files/UPLOAD_REQUEST', uploadFile),
]);