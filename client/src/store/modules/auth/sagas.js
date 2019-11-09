import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

import { singInSuccess } from './actions';

export function* singIn({ payload }) {
    const { email, password } = payload;

    const res = yield call(api.post, 'sessions', {
        email,
        password
    });

    const { token } = res.data;

    console.log(token)

    yield put(singInSuccess(token));

    history.push('dashboard')
}

export default all([
    takeLatest('@auth/SING_IN_REQUEST', singIn)
]);