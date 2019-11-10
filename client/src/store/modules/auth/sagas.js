import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { singInSuccess, singFailure } from './actions';

export function* singIn({ payload }) {
    try {
        const { email, password } = payload;

        if(!email || !password) {
            toast.error('preencha todos os seus dados!');
            return;
        }

        const res = yield call(api.post, 'sessions', {
            email,
            password
        });
    
        const { token, user } = res.data;

        api.defaults.headers.Authorization = `Bearer ${token}`;

        yield put(singInSuccess(token, user));
    
        history.push('dashboard')
    } catch (err) {
        toast.error('Houve um problema com a autenticação, verifique suas credenciais!');
        yield put(singFailure());
    }
}

export function* singUp({ payload }) {
    try {
        const { name, email, password} = payload;

        yield call(api.post, 'users', {
            name,
            email,
            password
        });
        
        history.push('/');
    } catch (err) {
        toast.error('Falha ao cadastrar, verifique seus dados!');

        yield put(singFailure());
    }
}

export function singOut() {
    history.push('/');
}

export function setToken({ payload }) {
    if (!payload) return;

    const { token } = payload.auth;

    if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
    }
}

export default all([
    takeLatest('persist/REHYDRATE', setToken),
    takeLatest('@auth/SING_IN_REQUEST', singIn),
    takeLatest('@auth/SING_UP_REQUEST', singUp),
    takeLatest('@auth/SING_OUT', singOut)
]);